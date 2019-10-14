function createCannonTube(obj, x, y, z){
    'use strict';

    var tube = new THREE.Group();

    createTube(tube, 0, 0, 0); // Tube referencial origin
    createExit(tube, 10, 0, 0);

    tube.position.set(x, y, z);

    obj.add(tube);

    return tube;
}

function createTube(obj, x, y, z) {
    'use strict';

    var material = new THREE.MeshBasicMaterial({color: '#4e635a', wireframe: true});
    var geometry = new THREE.CylinderGeometry(3, 3, 20, 30, 20);
    var mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.set(-Math.PI/2, 0, -Math.PI/2);
    mesh.position.set(x, y, z);
    obj.add(mesh);

}

function createExit(obj, x, y, z) {
    'use strict';

    var material = new THREE.MeshBasicMaterial({color: '#854442', wireframe: true});
    var geometry = new THREE.TorusGeometry(3, 0.35, 8, 50);
    var mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.set(0, -Math.PI/2, 0);
    mesh.position.set(x, y, z);
    obj.add(mesh);

}