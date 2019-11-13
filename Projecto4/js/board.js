function createBoard() {
    'use strict';

    var texture = new THREE.TextureLoader().load('textures/wooden-background-chess-board-wood-texture-pine-vector-19050058.jpg');
    var bumpMap = new THREE.TextureLoader().load('textures/14693-bump.jpg');
    var board = new THREE.Group();
    var materials = [new THREE.MeshBasicMaterial({map: texture}),
                     new THREE.MeshPhongMaterial({map: texture, bumpMap: bumpMap})
                    ];
    var geometry = new THREE.PlaneGeometry(200, 200, 100, 100);
    var mesh = new smartMesh(geometry, materials);

    mesh.rotateX(-Math.PI/2);
    board.add(mesh);
    scene.add(board);

    return board;
}

