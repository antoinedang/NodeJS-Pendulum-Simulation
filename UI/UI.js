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
const resetButton = document.querySelector('#reset');
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
    if (pendulum1Select.checked) {
        pendulumCircle1.style.left = newLength + "px";
        pendulumLine1.style.width = newLength + "px"; }
    if (pendulum2Select.checked) {
        pendulumCircle2.style.left = newLength + "px";
        pendulumLine2.style.width = newLength + "px"; }
    if (pendulum3Select.checked) {
        pendulumCircle3.style.left = newLength + "px";
        pendulumLine3.style.width = newLength + "px"; }
    if (pendulum4Select.checked) {
        pendulumCircle4.style.left = newLength + "px";
        pendulumLine4.style.width = newLength + "px"; }
    if (pendulum5Select.checked) {
        pendulumCircle5.style.left = newLength + "px";
        pendulumLine5.style.width = newLength + "px"; }
}

const updateWeight = e => {
    const newWeight = 20 + 30*(e.target.value/100);
    weightLabel.innerText = newWeight;
    if (pendulum1Select.checked) {
        pendulumCircle1.style.width = newWeight + "px";
        pendulumCircle1.style.height = newWeight + "px";
        pendulumCircle1.style.top = (newWeight/-2)+1 + "px"; }
    if (pendulum2Select.checked) {
        pendulumCircle2.style.width = newWeight + "px";
        pendulumCircle2.style.height = newWeight + "px";
        pendulumCircle2.style.top = (newWeight/-2)+1 + "px"; }
    if (pendulum3Select.checked) {
        pendulumCircle3.style.width = newWeight + "px";
        pendulumCircle3.style.height = newWeight + "px";
        pendulumCircle3.style.top = (newWeight/-2)+1 + "px"; }
    if (pendulum4Select.checked) {
        pendulumCircle4.style.width = newWeight + "px";
        pendulumCircle4.style.height = newWeight + "px";
        pendulumCircle4.style.top = (newWeight/-2)+1 + "px"; }
    if (pendulum5Select.checked) {
        pendulumCircle5.style.width = newWeight + "px";
        pendulumCircle5.style.height = newWeight + "px";
        pendulumCircle5.style.top = (newWeight/-2)+1 + "px"; }
}

const updateTimeScale = e => {
    const newTimeScale = 0.5 + 1.5*(e.target.value/100);
    timeScaleLabel.innerText = newTimeScale;
}

const updateAngle = e => {
    const newAngle = -170 + 340*(e.target.value/100)
    pendulumAngleLabel.innerText = newAngle;
    const angleInDeg = (-1*newAngle)+90
    if (pendulum1Select.checked) { updateAnglePendulum1(angleInDeg); }
    if (pendulum2Select.checked) { updateAnglePendulum2(angleInDeg); }
    if (pendulum3Select.checked) { updateAnglePendulum3(angleInDeg); }
    if (pendulum4Select.checked) { updateAnglePendulum4(angleInDeg); }
    if (pendulum5Select.checked) { updateAnglePendulum5(angleInDeg); }
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
    console.log("Start sim.")
    if (pendulum1Select.checked) { startPendulum1() }
    if (pendulum2Select.checked) { startPendulum2() }
    if (pendulum3Select.checked) { startPendulum3() }
    if (pendulum4Select.checked) { startPendulum4() }
    if (pendulum5Select.checked) { startPendulum5() }
}

const onPause = () => {
    console.log("Pause sim.")
    if (pendulum1Select.checked) { pausePendulum1() }
    if (pendulum2Select.checked) { pausePendulum2() }
    if (pendulum3Select.checked) { pausePendulum3() }
    if (pendulum4Select.checked) { pausePendulum4() }
    if (pendulum5Select.checked) { pausePendulum5() }
}

const addEventListeners = () => {
    pendulumColor.addEventListener('change', updateColor)
    pendulumLength.addEventListener('change', updateLength)
    pendulumWeight.addEventListener('change', updateWeight)
    pendulumAngle.addEventListener('change', updateAngle)
    simulationTimeScale.addEventListener('change', updateTimeScale)
    startButton.addEventListener('click', onStart)
    pauseButton.addEventListener('click', onPause)
};

addEventListeners();

const sleep = ms => new Promise(r => setTimeout(r, ms));

const pollPendulumRotations = async () => {
    const response = await fetch('http://example.com/movies.json');
    const myJson = await response.json();
    console.log(myJson);
    sleep(100); //10 refreshes per second
    pollPendulumRotations();
}

pollPendulumRotations();