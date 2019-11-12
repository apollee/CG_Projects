function createBoard() {
    'use strict';

    var texture = new THREE.TextureLoader().load('js/textures/wooden-background-chess-board-wood-texture-pine-vector-19050058.jpg');
    var floor = new THREE.Group();
    var materials = [new THREE.MeshBasicMaterial({map: texture}),
                     new THREE.MeshPhongMaterial({map: texture})
                    ];
    var geometry = new THREE.BoxGeometry(100, 100, 2, 20, 20);
    var mesh = new smartMesh(geometry, materials);

    mesh.rotateX(Math.PI/2);
    mesh.position.set(0, 0, 0);
    floor.add(mesh);
    scene.add(floor);
}

