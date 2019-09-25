function createHand(x, y, z) {
    'use strict';

    var hand = new THREE.Object3D();

    createBaseHand(hand, 0, 0, 0);
    createFinger(hand, -2, 2, 0);
    createFinger(hand, 2, 2, 0);

    hand.position.set(x, y, z);
    scene.add(hand);
}

function createFinger(obj, x, y, z) {
    'use strict';

    var material = new THREE.MeshBasicMaterial({color: '#eb6841', wireframe: true});
    var geometry = new THREE.BoxGeometry(1, 1, 3);
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    mesh.rotation.set( Math.PI/2, 0, 0);
    obj.add(mesh);
}

function createBaseHand(obj, x, y, z) {
    'use strict';

    var material = new THREE.MeshBasicMaterial({color: '#eb6841', wireframe: true});
    var geometry = new THREE.BoxGeometry(8, 1, 4)
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    obj.add(mesh);
}