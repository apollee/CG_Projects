function createWallBase(obj, x, y, z){
    'use strict';

    var wall = new THREE.Object();

    createFrontWall(wall, 0, 0, 0); // wall referencial origin

    wall.position.set(x, y, z);

    obj.add(wall);

    return wall;
}

function createFrontWall(obj, x, y, z) {
    'use strict';

    var material = new THREE.MeshBasicMaterial({color: '#be9b7b', wireframe: true});
    var geometry = new THREE.BoxGeometry(2, 15, 6, 1, 1, 1);
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    obj.add(mesh);
}

function createSideWall(obj, x, y, z) {
    'use strict';

    var sideWall = new THREE.Object();

    createSideWall(sideWall, 0, 0, 0); // wall referencial origin

    sideWall.position.set(x, y, z);

    obj.add(sideWall);

    return sideWall;
}

function createSideWall(obj, x, y, z) {
    'use strict';

    var material = new THREE.MeshBasicMaterial({color: '#be9b7b', wireframe: true});
    var geometry = new THREE.BoxGeometry(2, 15, 6, 1, 1, 1);
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    obj.add(mesh);
}