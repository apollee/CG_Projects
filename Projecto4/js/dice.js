function createDice(x, y, z) {
    'use strict';

    var dice = new THREE.Group();
    var geometry = new THREE.BoxBufferGeometry(15, 15, 15);
    var texture = new THREE.TextureLoader().load('js/textures/1.jpg');
    
    var material = new THREE.MeshPhongMaterial({map: texture});
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    dice.add(mesh);
    scene.add(dice);

    dice.rotateX(Math.PI/4);
    dice.rotateY(Math.PI/6);

}

function createDots(x, y, z) {
    'use strict';
}

