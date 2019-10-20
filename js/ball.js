var x_axis = new THREE.Vector3(1, 0, 0);

class Ball extends THREE.Object3D { /* lacks attributes such as direction */

	constructor(x, y, z, direction) {
        'use strict';
		
        super();
        
        this.axis = new THREE.AxisHelper(5);

        this.add(this.axis);

        var material = new THREE.MeshBasicMaterial({color: '#be9b7b', wireframe: true});
        var geometry = new THREE.SphereGeometry(3, 16, 16);
        this.mesh = new THREE.Mesh(geometry, material);

		this.add(this.mesh);

        this.position.set(x, y, z);

        this.speed = THREE.Math.randFloat(0.03, 0.1);
		
        this.direction = direction;

        if ( this.direction.x != 0 && this.direction.z >= 0 )
            this.rotateY( -this.direction.angleTo(x_axis) );

        else if ( this.direction.x != 0 && this.direction.z < 0 )
            this.rotateY( this.direction.angleTo(x_axis) );
	}

    getDirection() {
        return this.direction
    }

    getPosition() {
        return this.position;
    }

    axisShowHide(visibleState) {
        this.axis.visible = visibleState;
    }

    move() {
        this.translateOnAxis(x_axis, this.speed * time.getTimeDiff() / 5);
        this.mesh.rotateZ( -this.speed * time.getTimeDiff() /10 );
    }

    changeDirection() {

    }

    update() {   //needs to check if its out of bounds and colisions 
        this.speed *= .995;
        this.move();
        return -500 < this.position.x < 500 && -500 < this.position.z < 500;
    }
}
