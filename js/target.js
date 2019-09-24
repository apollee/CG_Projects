var scene;
var material, geometry, mesh;

function createSupport(x, y, z) {
    'use strict';

    var support = new THREE.Object3D();
    material = new THREE.MeshBasicMaterial({color: '#1e2c3e', wireframe: true});
    geometry = new THREE.CylinderGeometry(7, 7, 20, 50, 24);
    mesh = new THREE.Mesh(geometry, material);
    
    support.add(mesh);
    support.position.set(x, y, z);
    scene.add(support);
}

function createTorus(x, y, z) {
    'use strict';

    var torus = new THREE.Object3D();
    material = new THREE.MeshBasicMaterial({color: '#d40a47', wireframe: true});
    geometry = new THREE.TorusGeometry(5, 2, 16, 100);
    mesh = new THREE.Mesh(geometry, material);

    torus.add(mesh);
    torus.position.set(x, y, z);
    scene.add(torus);
}