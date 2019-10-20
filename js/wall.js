function createAllWalls(x, y, z) {
    'use strict';

    var wall = new THREE.Object3D();

    createFrontWall(wall, 0, 0, 0); // wall referencial origin
    createSideWall(wall, -62, 0,  48);
    createSideWall(wall, -62, 0, -48);

    wall.position.set(x, y, z);

    scene.add(wall);
}

function createFrontWall(obj, x, y, z) {
    'use strict';

    var material = new THREE.MeshBasicMaterial({color: '#2D3047', wireframe: true});
    var geometry = new THREE.BoxGeometry(4, 8, 100, 4, 8, 100);
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y+4, z);
    obj.add(mesh);
}

function createSideWall(obj, x, y, z) {
    'use strict';

    var material = new THREE.MeshBasicMaterial({color: '#2D3047', wireframe: true});
    var geometry = new THREE.BoxGeometry(120, 8, 4, 120, 8, 4);
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y+4, z);
    obj.add(mesh);
}

function createFloor() {
    'use strict';

    var floor = new THREE.Group();

    var material = new THREE.MeshBasicMaterial({color: '#FB8B24', wireframe: true});
    var geometry = new THREE.PlaneGeometry(112, 92, 33, 22);
    var mesh = new THREE.Mesh(geometry, material);

    mesh.rotateX(Math.PI/2);

    mesh.position.set(12, 0, 0);

    floor.add(mesh);

    scene.add(floor);
}
