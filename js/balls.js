class Ball extends THREE.Object3D{

	constructor(x, y, z, velInit){
		super();

		var ball = createBall(this, 0, 0, 0); 
		
		this.position.set(x, y, z);
	}
}


function createBall(obj, x, y, z){
    'use strict';

    var ball = new THREE.Group();

    createBallBase(ball, 0, 0, 0);

    ball.position.set(x, y, z);

    //ball.add( new THREE.axisHelper(5));
    obj.add(ball);

    return ball;
}

function createBallBase(obj, x, y, z) {
    'use strict';

    var material = new THREE.MeshBasicMaterial({color: '#be9b7b', wireframe: true});
    var geometry = new THREE.SphereGeometry(4, 16, 16);
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    obj.add(mesh);
}
