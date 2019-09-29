function createRobotHand(obj, x, y, z) {
    'use strict';

    var hand = new THREE.Group();

    createWrist(hand, 0, 0, 0); // hand referencial origin
    createHandBase(hand, 0, 2.5, 0);
    createFinger(hand, -2, 4, 0);
    createFinger(hand, 2, 4, 0);

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

    var material = new THREE.MeshBasicMaterial({color: '#578e67', wireframe: true});
    var geometry = new THREE.BoxGeometry(8, 1, 4, 8, 1, 4)
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    obj.add(mesh);
}

function createWrist(obj, x, y, z) {
    'use strict';

    var material = new THREE.MeshBasicMaterial({color: '#00a0b0', wireframe: true});
    var geometry = new THREE.SphereGeometry(2.5, 8, 8);
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    obj.add(mesh);
}
