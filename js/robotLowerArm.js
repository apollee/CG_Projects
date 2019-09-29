function createRobotLowerArm(obj, x, y, z) {
    'use strict';

    var lowerArm = new THREE.Group();

    createElbow(lowerArm, 0, 0, 0); // lowerArm referencial origin
    createLowerArmBone(lowerArm, 0, 9.5, 0); 

    lowerArm.position.set(x, y, z);
    obj.add( lowerArm );

    return lowerArm;
}

function createElbow(obj, x, y, z) {
    'use strict';

    var material = new THREE.MeshBasicMaterial({color: '#00a0b0', wireframe: true});
    var geometry = new THREE.SphereGeometry(2.5, 8, 8);
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    obj.add(mesh);
}

function createLowerArmBone(obj, x, y, z) {
    'use strict';

    var material = new THREE.MeshBasicMaterial({color: '#edc951', wireframe: true});
    var geometry = new THREE.BoxGeometry(3, 15, 3, 3, 10, 3);
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    obj.add(mesh)
}