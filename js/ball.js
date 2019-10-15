class Ball extends THREE.Object3D {

	constructor(x, y, z) {
        'use strict';
		
        super();

        var material = new THREE.MeshBasicMaterial({color: '#be9b7b', wireframe: true});
        var geometry = new THREE.SphereGeometry(4, 16, 16);
        var mesh = new THREE.Mesh(geometry, material);
		this.add(mesh);
	
		this.position.set(x, y, z);
	}

    update() {
        
    }
}
