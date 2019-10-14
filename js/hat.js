function createCannonHat(obj, x, y, z){
    'use strict';

    var hat = new THREE.Group();

    createHat(hat, 0, 0, 0); // hat referencial origin
    createHatBall(hat, -3.5, 0, 0);

    hat.position.set(x, y, z);

    obj.add(hat);

    return hat;
}

function createHat(obj, x, y, z) {
    'use strict';

    var material = new THREE.MeshBasicMaterial({color: '#854442', wireframe: true});
    var geometry = new THREE.SphereGeometry(3, 5, 5, 0, Math.PI, 0);
    var mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.set(0, -Math.PI/2, 0);
    mesh.position.set(x, y, z);
    obj.add(mesh);

}

function createHatBall(obj, x, y, z) {
    'use strict';

    var material = new THREE.MeshBasicMaterial({color: '#525b5c', wireframe: true});
    var geometry = new THREE.SphereGeometry(0.5, 5, 5, 0, 6.3, 0, 3.1);
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    obj.add(mesh);
}