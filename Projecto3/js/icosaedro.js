var numGold = (1 + Math.sqrt(5)) / 2

class Icosaedro extends THREE.Object3D {
	
	constructor(x, y, z){
		super();

		
		this.vertexList = createAllVertex(x, y, z);

		this.position.set(x, y, z);
		
	}

}
