const express = require('express');
const cors = require('cors');
const app = express()
app.use(express.json())
app.use(cors({origin: "null"}));

var PORT = process.argv[2];

app.listen(PORT, () => console.log(`Running API on http://localhost:${PORT}`))

var gravity = 9.81

var angularDamping = 0.05

var simulationProperties = {
    "simulating":false,
    "angle":0,
    "angularVelocity":0,
    "timeScale":1.0
}

var simulationInitialProperties = {
    "startAngle":0,
    "weight":35,
    "length":100
}

app.get("/properties", (req, res) => {
    res.status(200).json(simulationProperties);
})

app.get("/initial_properties", (req, res) => {
    res.status(200).send(simulationInitialProperties);
})

app.post('/update', (req, res) => {
    const new_properties = req.body;
    console.log(new_properties)
    try {
        if ("simulating" in new_properties) {
            simulationProperties.simulating = new_properties.simulating;
            if (simulationProperties.simulating) {simulate();}
        }
        if ("angle" in new_properties) {
            simulationProperties.angle = new_properties.angle;
        }
        if ("angularVelocity" in new_properties) {
            simulationProperties.angularVelocity = new_properties.angularVelocity;
        }
        if ("startAngle" in new_properties) {
            simulationInitialProperties.startAngle = new_properties.startAngle;
        }
        if ("weight" in new_properties) {
            simulationInitialProperties.weight = new_properties.weight;
        }
        if ("length" in new_properties) {
            simulationInitialProperties.length = new_properties.length;
        }
        if ("timeScale" in new_properties) {
            simulationProperties.timeScale = new_properties.timeScale;
        }
    } catch (error) {
        console.log(error);
        res.status(404).send(error);
    }

    res.status(200).send("Successfully updated simulation.");
})

const toRadians = deg => {
    const pi = 3.1415926
    return deg * pi / 180;
} 

const simulate = () => {
    if (simulationProperties.simulating) { 
        const timeInterval = 0.05; //in seconds
        const scaledTimeInterval = timeInterval*simulationProperties.timeScale;
        var angularAcceleration = (-1*gravity*Math.sin(toRadians(simulationProperties.angle)))/simulationInitialProperties.length;
        angularAcceleration = angularAcceleration*simulationInitialProperties.weight*(1.0-angularDamping);
        simulationProperties.angularVelocity = simulationProperties.angularVelocity + (angularAcceleration*scaledTimeInterval);
        simulationProperties.angle =  simulationProperties.angle + simulationProperties.angularVelocity;
        setTimeout(() => { simulate(); }, 1000*timeInterval); }
}