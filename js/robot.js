
var robotParts = {};

function createRobot(robPar, x, y, z) {
    'use strict'

    var robot = new THREE.Object3D();

    var car = createRobotCar(robot, 0, 5.5, 0);
    var upperArm = createRobotUpperArm(car, 0, 1, 0);
    var lowerArm = createRobotLowerArm(upperArm, 0, 19.5, 0);
    var hand = createRobotHand(lowerArm, 0, 19, 0);

    robot.position.set(x, y, z);

    robPar["robot"] = robot;
    robPar["car"] = car;
    robPar["upperArm"] = upperArm;
    robPar["lowerArm"] = lowerArm;
    robPar["hand"] = hand;
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