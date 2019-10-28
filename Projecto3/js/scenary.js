function createAllWalls(x, y, z) {
    'use strict';

    var wall = new THREE.Object3D();

    createFrontWall(wall, 0, 0,  0);

    wall.position.set(x, y, z);

    scene.add(wall);
}

function createFrontWall(obj, x, y, z) {
    'use strict';

    var material = new THREE.MeshBasicMaterial({color: '#5C5C5C', wireframe: true});
    var geometry = new THREE.BoxGeometry(140, 120, 1, 33, 22);
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    obj.add(mesh);

    paintingFrame(obj);
}

function createFloor() {
    'use strict';

    var floor = new THREE.Group();
    var material = new THREE.MeshBasicMaterial({color: '#d2b48c', wireframe: true});
    var geometry = new THREE.BoxGeometry(140, 50, 1, 33, 22);
    var mesh = new THREE.Mesh(geometry, material);

    mesh.rotateX(Math.PI/2);

    mesh.position.set(0, -60, 25);

    floor.add(mesh);

    scene.add(floor);
}

function paintingFrame(obj) {
    'use strict'

    //deixei com nomes de variaveis porque acho que isto tem que sair deste ficheiro
    var side_left = createSidePainting(obj, 3, 40, -30, 0, 25);
    var detail_side_left = createDetailSidePainting(obj, 1, 39, -30, 0, 25);
    var bottom = createSidePainting(obj, 63, 3, 0, -19, 25);
    var detail_bottom = createDetailSidePainting(obj, 60, 1, 0, -19, 25);
    var side_right = createSidePainting(obj, 3, 40, 30, 0, 25);
    var detail_side_right = createDetailSidePainting(obj, 1, 39, 30, 0, 25);
    var top = createSidePainting(obj, 63, 3, 0, 19, 25);
    var detail_top = createDetailSidePainting(obj, 60, 1, 0, 19, 25);
}

function createSidePainting(obj, width, height, x, y, z) {
    'use strict'

    var material = new THREE.MeshBasicMaterial({color: '#cd853f', wireframe: true});
    var geometry = new THREE.BoxGeometry(width, height, 1, 33, 22);
    var mesh = new THREE.Mesh(geometry, material);

    mesh.position.set(x,y,z);
    obj.add(mesh);
}

function createDetailSidePainting(obj, width, height, x, y, z) {
    'use strict'

    var material = new THREE.MeshBasicMaterial({color: '#8b5a2b', wireframe: true});
    var geometry = new THREE.BoxGeometry(width, height, 2, 33, 22);
    var mesh = new THREE.Mesh(geometry, material);

    mesh.position.set(x,y,z);
    obj.add(mesh);
}