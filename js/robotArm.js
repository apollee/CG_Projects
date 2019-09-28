function createRobotHalfArm(obj, x, y, z) {
    'use strict';

    var halfArm = new THREE.Group();

    createArmJoint(halfArm, 0, 0, 0); // halfArm referencial origin
    createArmBone(halfArm, 0, -6.5, 0); 

    halfArm.position.set(x, y, z);
    obj.add( halfArm );

    return halfArm;
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