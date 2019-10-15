function createWall( x, y, z){
    'use strict';

    var wall = new THREE.Object3D();

    createWallBase1(wall, 0, 0, 0); // wall referencial origin
    createSideWall(wall, -23, 0,  27);
    createSideWall(wall, -23, 0, -27);

    wall.position.set(x, y, z);

    scene.add(wall);

}

function createWallBase1(obj, x, y, z) {
    'use strict';

    var material = new THREE.MeshBasicMaterial({color: '#aaaaaa', wireframe: true});
    var geometry = new THREE.BoxGeometry(4, 10, 50, 4, 10, 50);
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    obj.add(mesh);
}

function createSideWall(obj, x, y, z) {
    'use strict';

    var material = new THREE.MeshBasicMaterial({color: '#1e2c3e', wireframe: true});
    var geometry = new THREE.BoxGeometry(50, 10, 4, 50, 10, 4);
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    obj.add(mesh);
}