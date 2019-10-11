class Ball extends THREE.Object3D{

	constructor(x, y, z, velInit){
		super();

		var ball = createBall(this, 0, 0, 0); 
		
		this.position.set(x, y, z);


	}
}