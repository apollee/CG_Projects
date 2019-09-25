function createRobot(x, y, z) {
    'use strict'

    var robot = new THREE.Object3D();

    createRobotCar(robot, -20, -10, 0);
    createRobotArm(robot, -20, -1.5, 0);
    createRobotHand(robot, -20, 20, 0);

    robot.position.set(x, y, z);
    scene.add(robot);
}
