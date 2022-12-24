# Simple NodeJS/JS/CSS Pendulum Simulation
In the scope of obtaining an internship at Vention in Summer 2023, I was challenged to make a simple nodeJS REST API + pure JS/CSS user interface which can simulate 5 pendulums swinging, with variables that can be adjusted by the user (length, weight, etc.).

Antoine Dangeard
 
24/12/2022

### Run it yourself: (requires node.js, within node.js you must have express and cors librairies installed)
- run start.bat (in the /api folder) in command line
- open index.html (in the /UI folder) using the browser of your choice

## REST Documentation (brief, as requested):

## Endpoints:
- GET /properties => returns the current properties of the pendulum (properties subject to change) in a JSON object of the form:
        {"simulating":bool, "angle":float, "angularVelocity":float, "timeScale":float}
        
- GET /initial_properties => returns the initial properties of the pendulum in a JSON object of the form:
        {"startAngle":float, "weight":float, "length":float}

- POST /update {params} => receives a JSON object mapping property names to new values. The properties on the server side are updated to the new values supplied. All arguments are optional, meaning a JSON containing any one and/or combination of the 7 properties listed in the GET endpoints above is a valid request to this endpoint. This was done to make it easy to change the server's properties one at a time without needing to remember the full context.

## Implementation:
### JS/CSS UI:
The static elements of the page are built in a way to minimize code complexity. All elements of the UI are easily updatable in JS code. The buttons and input fields activate/deactivate each other to prevent "illegal"/problematic inputs, this allows the code to have minimal if statements and not need to remember any program/pendulum states. Start button runs the simulation and updates the pendelum rotations accordingly. The Pause button pauses the simulation, pressing Start again continues from where it left off. The Stop button resets the pendulums to their initial positions and allows the user to modify the starting parameters again.

### REST API:
The simulate() function contains all the code pertaining to physical calculations. This is where most of the complexity is, since the endpoints' implementations are fairly straightforward. The only hard-coded values are gravity (9.81) and angular damping (30% less acceleration on acceleration which increases speed) to make it so pendulums do not swing indefinitely.
