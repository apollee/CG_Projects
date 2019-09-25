function createRobotArm(x, y, z) {
    'use strict';

    var arm = new THREE.Object3D();

    createHalfArm(arm, 0, 0, 0);
    createHalfArm(arm, 0, 13, 0);

    arm.position.set(x, y, z);
    scene.add(arm);

}

function createHalfArm(obj, x, y, z) {

    createArmJoint(obj, x, y+6.5, z);
    createArmBone(obj, x, y, z);
}

function createArmJoint(obj, x, y, z) {
    'use strict';

    var material = new THREE.MeshBasicMaterial({color: '#00a0b0', wireframe: true});
    var geometry = new THREE.SphereGeometry(2.5, 8, 8);
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    obj.add(mesh);
}

function createArmBone(obj, x, y, z) {
    'use strict';

    var material = new THREE.MeshBasicMaterial({color: '#edc951', wireframe: true});
    var geometry = new THREE.BoxGeometry(3, 10, 3, 3, 10, 3);
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    obj.add(mesh)
}