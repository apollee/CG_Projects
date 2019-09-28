function createRobotUpperArm(obj, x, y, z) {
    'use strict';

    var upperArm = new THREE.Group();

    createUpperArmBone(upperArm, 0, 7, 0); 

    upperArm.position.set(x, y, z);
    obj.add( upperArm );

    return upperArm;
}

function createUpperArmBone(obj, x, y, z) {
    'use strict';

    var material = new THREE.MeshBasicMaterial({color: '#edc951', wireframe: true});
    var geometry = new THREE.BoxGeometry(3, 10, 3, 3, 10, 3);
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    obj.add(mesh)
}
