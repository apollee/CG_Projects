function createRobotHand(obj, x, y, z) {
    'use strict';

    var hand = new THREE.Group();

    createHandBase(hand, 0, 0, 0); // hand referencial origin
    createFinger(hand, -2, 2, 0);
    createFinger(hand, 2, 2, 0);

    hand.position.set(x, y, z);
    obj.add(hand);

    return hand;
}

function createFinger(obj, x, y, z) {
    'use strict';

    var material = new THREE.MeshBasicMaterial({color: '#eb6841', wireframe: true});
    var geometry = new THREE.BoxGeometry(1, 1, 3, 1, 1, 3);
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    mesh.rotation.set( Math.PI/2, 0, 0);
    obj.add(mesh);
}

function createHandBase(obj, x, y, z) {
    'use strict';

    var material = new THREE.MeshBasicMaterial({color: '#eb6841', wireframe: true});
    var geometry = new THREE.BoxGeometry(8, 1, 4, 8, 1, 4)
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    obj.add(mesh);
}