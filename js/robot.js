function createRobot(robPar, x, y, z) {
    'use strict'

    var robot = new THREE.Object3D();

    var car = createRobotCar(robot, 0, 5.5, 0);
    var upperArm = createRobotHalfArm(car, 0, 15, 0);
    var lowerArm = createRobotHalfArm(upperArm, 0, 13, 0);
    var hand = createRobotHand(lowerArm, 0, 3, 0);

    robot.position.set(x, y, z);

    robPar["robot"] = robot;
    robPar["car"] = car;
    robPar["upperArm"] = upperArm;
    robPar["lowerArm"] = lowerArm;
    robPar["hand"] = hand;

}
