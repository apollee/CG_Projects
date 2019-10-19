function createAllWalls(x, y, z) {
    'use strict';

    var wall = new THREE.Object3D();

    createFrontWall(wall, 0, 0, 0); // wall referencial origin
    createSideWall(wall, -42, 0,  38);
    createSideWall(wall, -42, 0, -38);

    wall.position.set(x, y, z);

    scene.add(wall);
}

function createFrontWall(obj, x, y, z) {
    'use strict';

    var material = new THREE.MeshBasicMaterial({color: '#aaaaaa', wireframe: true});
    var geometry = new THREE.BoxGeometry(4, 8, 80, 4, 8, 80);
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y+4, z);
    obj.add(mesh);
}

function createSideWall(obj, x, y, z) {
    'use strict';

    var material = new THREE.MeshBasicMaterial({color: '#1e2c3e', wireframe: true});
    var geometry = new THREE.BoxGeometry(80, 8, 4, 80, 8, 4);
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y+4, z);
    obj.add(mesh);
}

function createFloor() {
    'use strict';

    var floor = new THREE.Group();

    var material = new THREE.MeshBasicMaterial({color: '#aaaaaa', wireframe: true});
    var geometry = new THREE.PlaneGeometry(110, 72, 33, 21);
    var mesh = new THREE.Mesh(geometry, material);

    mesh.rotateX(Math.PI/2);

    mesh.position.set(14, 0, 0);

    floor.add(mesh);

    scene.add(floor);
}
