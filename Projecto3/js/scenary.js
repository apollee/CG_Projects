function createAllWalls(x, y, z) {
    'use strict';

    var wall = new THREE.Object3D();

    createFrontWall(wall, 0, 500,  0);

    wall.position.set(x, y, z);

    scene.add(wall);
}

function createFrontWall(obj, x, y, z) {
    'use strict';

    var material = new THREE.MeshBasicMaterial({color: '#5C5C5C', wireframe: true});
    var geometry = new THREE.BoxGeometry(10000, 1000, 1, 100, 10);
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    obj.add(mesh);

}

function createFloor() {
    'use strict';

    var floor = new THREE.Group();
    var material = new THREE.MeshBasicMaterial({color: '#d2b48c', wireframe: true});
    var geometry = new THREE.BoxGeometry(5000, 1000, 1, 50, 10);
    var mesh = new THREE.Mesh(geometry, material);

    mesh.rotateX(Math.PI/2);

    mesh.position.set(0, 0, 500);

    floor.add(mesh);

    scene.add(floor);
}

function createPedestal(x, y, z) {
    'use strict'

    var pedestal = new THREE.Group();
    var material = new THREE.MeshBasicMaterial({color: '#ecd7b8', wireframe: true});
    var geometry = new THREE.CylinderGeometry(60, 60, 20, 30);
    var mesh = new THREE.Mesh(geometry, material);

    mesh.position.set(x,y,z);
    pedestal.add(mesh);

    scene.add(pedestal);
}