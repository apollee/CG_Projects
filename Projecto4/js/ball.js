function createBall(x, y, z) {
    'use strict';

    var ball = new THREE.Group();
    var geometry = new THREE.SphereGeometry(10, 32, 32);
    var texture = new THREE.TextureLoader().load('js/textures/800px-Mona_Lisa,_by_Leonardo_da_Vinci,_from_C2RMF_retouched.jpg');
    
    var material = new THREE.MeshBasicMaterial({map: texture});
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    ball.add(mesh);
    scene.add(ball);
}
