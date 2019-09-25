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

    var material = new THREE.MeshBasicMaterial({color: '#1e2c3e', wireframe: true});
    var geometry = new THREE.SphereGeometry(2.5, 32, 32);
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    obj.add(mesh);
}

function createArmBone(obj, x, y, z) {
    'use strict';

    var material = new THREE.MeshBasicMaterial({color: '#d40a47', wireframe: true});
    var geometry = new THREE.CylinderGeometry(2, 2, 10, 20, 15, true);
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    obj.add(mesh)
}