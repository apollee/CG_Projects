class Ball extends THREE.Object3D { /* lacks attributes such as direction */

	constructor(x, y, z, vectorDir, vectorRot) {
        'use strict';
		
        super();
        
        this.axis = new THREE.AxisHelper(5);

        this.add(this.axis);

        var material = new THREE.MeshBasicMaterial({color: '#be9b7b', wireframe: true});
        var geometry = new THREE.SphereGeometry(3, 16, 16);
        var mesh = new THREE.Mesh(geometry, material);

		this.add(mesh);
	
		this.position.set(x, y, z);
	}

    axisShowHide() {
        this.axis.visible = !this.axis.visible;
    }

    move() {

    }

    update() {  /* needs to check if its out of bounds and colisions */
        this.move();
        return true;
    }
}
