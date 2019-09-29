function createTarget(x, y, z) {
    'use strict';

    var target = new THREE.Object3D();

    createSupport(target, 0, 0, 0);
    createTorus(target, 0, 22, 0);

    target.position.set(x, y, z);
    scene.add(target);
}

function createSupport(obj, x, y, z) {
    'use strict';

    var material = new THREE.MeshBasicMaterial({color: '#1e2c3e', wireframe: true});
    var geometry = new THREE.CylinderGeometry(4, 4, 30, 20, 30);
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    obj.add(mesh);
}

function createTorus(obj, x, y, z) {
    'use strict';

    var material = new THREE.MeshBasicMaterial({color: '#d40a47', wireframe: true});
    var geometry = new THREE.TorusGeometry(5, 2, 16, 32);
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    mesh.rotation.set( 0, Math.PI/2, 0);
    obj.add(mesh)
}