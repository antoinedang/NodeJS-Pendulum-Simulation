//pendulum checkboxes
const pendulum1Select = document.querySelector('#pendulum1');
const pendulum2Select = document.querySelector('#pendulum2');
const pendulum3Select = document.querySelector('#pendulum3');
const pendulum4Select = document.querySelector('#pendulum4');
const pendulum5Select = document.querySelector('#pendulum5');
//pendulum color
const pendulumColor = document.querySelector('#color');
const colorLabel = document.querySelector('#color-value');

//pendulum length
const pendulumLength = document.querySelector('#length');
const lengthLabel = document.querySelector('#length-value');

//pendulum weight
const pendulumWeight = document.querySelector('#weight');
const weightLabel = document.querySelector('#weight-value');

//sim time scale
const simulationTimeScale = document.querySelector('#time');
const timeScaleLabel = document.querySelector('#timescale-value');

//pendulum angle
const pendulumAngle = document.querySelector('#angle');
const pendulumAngleLabel = document.querySelector('#angle-value');

//buttons
const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#stop');
const pauseButton = document.querySelector('#pause');

//pendulums
const pendulumLine1 = document.querySelector('#line1')
const pendulumCircle1 = document.querySelector('#circle1')
const pendulumLine2 = document.querySelector('#line2')
const pendulumCircle2 = document.querySelector('#circle2')
const pendulumLine3 = document.querySelector('#line3')
const pendulumCircle3 = document.querySelector('#circle3')
const pendulumLine4 = document.querySelector('#line4')
const pendulumCircle4 = document.querySelector('#circle4')
const pendulumLine5 = document.querySelector('#line5')
const pendulumCircle5 = document.querySelector('#circle5')

//variable to keep track of our simulation
var simulating = false
const simulationLabel = document.querySelector('#simulating-indicator')

const updateColor = e => {
    const newColor = e.target.value;
    colorLabel.innerText = newColor;
    if (pendulum1Select.checked) {
        pendulumCircle1.style.backgroundColor = newColor;
        pendulumLine1.style.borderColor = newColor; }
    if (pendulum2Select.checked) {
        pendulumCircle2.style.backgroundColor = newColor;
        pendulumLine2.style.borderColor = newColor; }
    if (pendulum3Select.checked) {
        pendulumCircle3.style.backgroundColor = newColor;
        pendulumLine3.style.borderColor = newColor; }
    if (pendulum4Select.checked) {
        pendulumCircle4.style.backgroundColor = newColor;
        pendulumLine4.style.borderColor = newColor; }
    if (pendulum5Select.checked) {
        pendulumCircle5.style.backgroundColor = newColor;
        pendulumLine5.style.borderColor = newColor; }
}

const updateLength = e => {
    const newLength = 50 + 150*(e.target.value/100);
    lengthLabel.innerText = newLength;
    const post_params = {"length":newLength};
    if (pendulum1Select.checked) {
        pendulumCircle1.style.left = newLength + "px";
        pendulumLine1.style.width = newLength + "px"; 
        updateSimulation(8080, post_params)}
    if (pendulum2Select.checked) {
        pendulumCircle2.style.left = newLength + "px";
        pendulumLine2.style.width = newLength + "px"; 
        updateSimulation(8081, post_params)}
    if (pendulum3Select.checked) {
        pendulumCircle3.style.left = newLength + "px";
        pendulumLine3.style.width = newLength + "px"; 
        updateSimulation(8082, post_params)}
    if (pendulum4Select.checked) {
        pendulumCircle4.style.left = newLength + "px";
        pendulumLine4.style.width = newLength + "px";
        updateSimulation(8083, post_params)}
    if (pendulum5Select.checked) {
        pendulumCircle5.style.left = newLength + "px";
        pendulumLine5.style.width = newLength + "px"; 
        updateSimulation(8084, post_params)}
}

const updateWeight = e => {
    const newWeight = 20 + 30*(e.target.value/100);
    weightLabel.innerText = newWeight;
    const post_params = {"weight":newWeight}
    if (pendulum1Select.checked) {
        pendulumCircle1.style.width = newWeight + "px";
        pendulumCircle1.style.height = newWeight + "px";
        pendulumCircle1.style.top = (newWeight/-2)+1 + "px"; 
        updateSimulation(8080, post_params)}
    if (pendulum2Select.checked) {
        pendulumCircle2.style.width = newWeight + "px";
        pendulumCircle2.style.height = newWeight + "px";
        pendulumCircle2.style.top = (newWeight/-2)+1 + "px"; 
        updateSimulation(8081, post_params)}
    if (pendulum3Select.checked) {
        pendulumCircle3.style.width = newWeight + "px";
        pendulumCircle3.style.height = newWeight + "px";
        pendulumCircle3.style.top = (newWeight/-2)+1 + "px"; 
        updateSimulation(8082, post_params)}
    if (pendulum4Select.checked) {
        pendulumCircle4.style.width = newWeight + "px";
        pendulumCircle4.style.height = newWeight + "px";
        pendulumCircle4.style.top = (newWeight/-2)+1 + "px"; 
        updateSimulation(8083, post_params)}
    if (pendulum5Select.checked) {
        pendulumCircle5.style.width = newWeight + "px";
        pendulumCircle5.style.height = newWeight + "px";
        pendulumCircle5.style.top = (newWeight/-2)+1 + "px"; 
        updateSimulation(8084, post_params)}
}

const updateTimeScale = e => {
    const newTimeScale = 0.5 + 1.5*(e.target.value/100);
    timeScaleLabel.innerText = newTimeScale + "x";
    const post_params = {"timeScale":newTimeScale};
    updateSimulation(8080, post_params);
    updateSimulation(8081, post_params);
    updateSimulation(8082, post_params);
    updateSimulation(8083, post_params);
    updateSimulation(8084, post_params);
}

const updateAngle = e => {
    const newAngle = -170 + 340*(e.target.value/100)
    pendulumAngleLabel.innerText = newAngle;
    const angleInDeg = (-1*newAngle)+90
    const post_params = {"startAngle":angleInDeg, "angle":angleInDeg}
    if (pendulum1Select.checked) { 
        updateAnglePendulum1(angleInDeg); 
        updateSimulation(8080, post_params)}
    if (pendulum2Select.checked) {
        updateAnglePendulum2(angleInDeg); 
        updateSimulation(8081, post_params)}
    if (pendulum3Select.checked) {
        updateAnglePendulum3(angleInDeg);
        updateSimulation(8082, post_params) }
    if (pendulum4Select.checked) {
        updateAnglePendulum4(angleInDeg);
        updateSimulation(8083, post_params) }
    if (pendulum5Select.checked) {
        updateAnglePendulum5(angleInDeg); 
        updateSimulation(8084, post_params)}

}

const updateAnglePendulum1 = newAngle => {
    pendulumLine1.style.transform = 'rotate('+newAngle+'deg)';
}

const updateAnglePendulum2 = newAngle => {
    pendulumLine2.style.transform = 'rotate('+newAngle+'deg)';
}

const updateAnglePendulum3 = newAngle => {
    pendulumLine3.style.transform = 'rotate('+newAngle+'deg)';
}

const updateAnglePendulum4 = newAngle => {
    pendulumLine4.style.transform = 'rotate('+newAngle+'deg)';
}

const updateAnglePendulum5 = newAngle => {
    pendulumLine5.style.transform = 'rotate('+newAngle+'deg)';
}

const onStart = () => {
    simulating = true;
    simulationLabel.innerText = "SIMULATING";
    simulationLabel.style.color = "green";
    pendulum1Select.disabled = true;
    pendulum2Select.disabled = true;
    pendulum3Select.disabled = true;
    pendulum4Select.disabled = true;
    pendulum5Select.disabled = true;
    pendulumAngle.disabled = true;
    pendulumLength.disabled = true;
    pendulumWeight.disabled = true;
    stopButton.disabled = false;
    pauseButton.disabled = false;
    startButton.disabled = true;

    const post_params = {"simulating":true};
    updateSimulation(8080, post_params);
    updateSimulation(8081, post_params);
    updateSimulation(8082, post_params);
    updateSimulation(8083, post_params);
    updateSimulation(8084, post_params);
    console.log("Start sim.");
    updatePendulums();
}

const onPause = () => {
    simulating = false;
    stopButton.disabled = false;
    pauseButton.disabled = true;
    startButton.disabled = false;
    simulationLabel.innerText = "PAUSED";
    simulationLabel.style.color = "gold";
    const post_params = {"simulating":false};
    updateSimulation(8080, post_params);
    updateSimulation(8081, post_params);
    updateSimulation(8082, post_params);
    updateSimulation(8083, post_params);
    updateSimulation(8084, post_params);
    console.log("Pause sim.");
}

const onStop = () => {
    simulating = false;
    simulationLabel.style.color = "beige";
    pendulum1Select.disabled = false;
    pendulum2Select.disabled = false;
    pendulum3Select.disabled = false;
    pendulum4Select.disabled = false;
    pendulum5Select.disabled = false;
    pendulumAngle.disabled = false;
    pendulumLength.disabled = false;
    pendulumWeight.disabled = false;
    stopButton.disabled = true;
    pauseButton.disabled = true;
    startButton.disabled = false;

    getInitialProperties(8080).then(function(initial_params){
        initial_params["simulating"] = false;
        initial_params["angularVelocity"] = 0;
        initial_params["angle"] = initial_params["startAngle"];
        console.log(initial_params);
        updateSimulation(8080, initial_params);
    });
    getInitialProperties(8081).then(function(initial_params){
        initial_params["simulating"] = false;
        initial_params["angularVelocity"] = 0;
        initial_params["angle"] = initial_params["startAngle"];
        console.log(initial_params);
        updateSimulation(8081, initial_params);
    });
    getInitialProperties(8082).then(function(initial_params){
        initial_params["simulating"] = false;
        initial_params["angularVelocity"] = 0;
        initial_params["angle"] = initial_params["startAngle"];
        console.log(initial_params);
        updateSimulation(8082, initial_params);
    });
    getInitialProperties(8083).then(function(initial_params){
        initial_params["simulating"] = false;
        initial_params["angularVelocity"] = 0;
        initial_params["angle"] = initial_params["startAngle"];
        console.log(initial_params);
        updateSimulation(8083, initial_params);
    });
    getInitialProperties(8084).then(function(initial_params){
        initial_params["simulating"] = false;
        initial_params["angularVelocity"] = 0;
        initial_params["angle"] = initial_params["startAngle"];
        console.log(initial_params);
        updateSimulation(8084, initial_params);
    });

    console.log("Stop sim.");
}

const addEventListeners = () => {
    pendulumColor.addEventListener('change', updateColor)
    pendulumLength.addEventListener('change', updateLength)
    pendulumWeight.addEventListener('change', updateWeight)
    pendulumAngle.addEventListener('change', updateAngle)
    simulationTimeScale.addEventListener('change', updateTimeScale)
    startButton.addEventListener('click', onStart)
    pauseButton.addEventListener('click', onPause)
    stopButton.addEventListener('click', onStop)
};

const updatePendulums = () => {
    if (simulating) { 
        updateAnglePendulum1(getProperties(8080).then(function(properties) { return properties.angle; }));
        updateAnglePendulum2(getProperties(8081).then(function(properties) { return properties.angle; }));
        updateAnglePendulum3(getProperties(8082).then(function(properties) { return properties.angle; }));
        updateAnglePendulum4(getProperties(8083).then(function(properties) { return properties.angle; }));
        updateAnglePendulum5(getProperties(8084).then(function(properties) { return properties.angle; }));
        setTimeout(() => { updatePendulums(); }, 100); }
}

const getProperties = async port => {
    const response = await fetch('http://localhost:'+port+'/properties');
    const myJson = await response.json(); //extract JSON from the http response
    console.log(myJson);
    return myJson;
}

const getInitialProperties = async port => {
    const response = await fetch('http://localhost:'+port+'/initial_properties');
    const myJson = await response.json(); //extract JSON from the http response
    console.log(myJson);
    return myJson;
}

const updateSimulation = async (port, args) => {
    const msg = JSON.stringify(args);
    const response = await fetch('http://localhost:' + port + '/update', {
      method: 'POST',
      mode:'cors',
      body: msg, // string or object
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
  }

addEventListeners();
