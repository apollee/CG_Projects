var robotParts = {};
var vector = new THREE.Vector3(0, 0, 0);

function createRobot(x, y, z) {
    'use strict'

    var robot = new THREE.Object3D();

    var car = createRobotCar(robot, 0, 5.5, 0);
    var upperArm = createRobotUpperArm(car, 0, 1, 0);
    var lowerArm = createRobotLowerArm(upperArm, 0, 19.5, 0);
    var hand = createRobotHand(lowerArm, 0, 19, 0);

    robot.position.set(x, y, z);

    robotParts["robot"] = robot;
    robotParts["car"] = car;
    robotParts["upperArm"] = upperArm;
    robotParts["lowerArm"] = lowerArm;
    robotParts["hand"] = hand;
}

function spinArm (deg) {
    robotParts["upperArm"].rotateY(deg);
}

function bendShoulder (deg) {
    robotParts["upperArm"].rotateZ(deg);
}

function bendElbow (deg) {
    robotParts["lowerArm"].rotateZ(deg);
}

function rightMovement () {
    vector.setComponent(2, Math.PI/16);
    robotParts["robot"].translateOnAxis(vector, 2);
}

function leftMovement () {
    vector.setComponent(2, -Math.PI/16);
    robotParts["robot"].translateOnAxis(vector, 2);
}

function upMovement () {
    vector.setComponent(0, Math.PI/16);
    robotParts["robot"].translateOnAxis(vector, 2);
}

function downMovement () {
    vector.setComponent(0, -Math.PI/16);
    robotParts["robot"].translateOnAxis(vector, 2);
}

function stopUpMovement () {
    vector.setComponent(0, 0);
    robotParts["robot"].translateOnAxis(vector, 0);
}

function stopDownMovement() {
    vector.setComponent(0, 0);
    robotParts["robot"].translateOnAxis(vector, 0);
}

function stopLeftMovement() {
    vector.setComponent(2, 0);
    robotParts["robot"].translateOnAxis(vector, 0);
}

function stopRightMovement() {
    vector.setComponent(2, 0);
    robotParts["robot"].translateOnAxis(vector, 0);
}
