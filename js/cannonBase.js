function createCannonBase(obj, x, y, z){
    'use strict';

    var base = new THREE.Group();

    createBottomBase(base, 0, 0, 0); // base referencial origin
    createWallBase(base, 0, 2, 7);
    createWallBase(base, 0, 2, -7);
    createWheel(base, -1, -4, 8.5);
    createWheel(base, -1, -4, -8.5);

    base.position.set(x, y, z);

    obj.add(base);

    return base;
}

function createBottomBase(obj, x, y, z) {
    'use strict';

    var material = new THREE.MeshBasicMaterial({color: '#be9b7b', wireframe: true});
    var geometry = new THREE.BoxGeometry(18, 6, 12, 1, 1, 1);
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    obj.add(mesh);

}

function createWallBase(obj, x, y, z) {
    'use strict';

    var material = new THREE.MeshBasicMaterial({color: '#be9b7b', wireframe: true});
    var geometry = new THREE.BoxGeometry(18, 10, 2, 1, 1, 1);
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    obj.add(mesh);

}

function createWheel(obj, x, y, z) {
    'use strict';

    var material = new THREE.MeshBasicMaterial({color: '#4b3832', wireframe: true});
    var geometry = new THREE.CylinderGeometry(6.5, 6.5, 1, 20, 30);
    var mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.set(-Math.PI/2, 0, 0);
    mesh.position.set(x, y, z);
    obj.add(mesh);

}
