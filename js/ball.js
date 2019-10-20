var x_axis = new THREE.Vector3(1, 0, 0);

class Ball extends THREE.Object3D { /* lacks attributes such as direction */

	constructor(x, y, z, direction, speed) {
        'use strict';
		
        super();
        
        this.axis = new THREE.AxisHelper(5);

        this.add(this.axis);

        var material = new THREE.MeshBasicMaterial({color: '#be9b7b', wireframe: true});
        var geometry = new THREE.SphereGeometry(3, 16, 16);
        this.mesh = new THREE.Mesh(geometry, material);

		this.add(this.mesh);

        this.position.set(x, y, z);

        this.speed = speed;
		
        this.direction = direction;

        this.angle = 0;

        if ( this.direction.x != 0 && this.direction.z >= 0 )
            this.angle = -this.direction.angleTo(x_axis);

        else if ( this.direction.x != 0 && this.direction.z < 0 )
            this.angle = this.direction.angleTo(x_axis);

        this.rotateY( this.angle );

        this.dirChangedX = false;
        this.dirChangedZ = false;
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

    directionChangedX() {
        this.dirChangedX = true;
    }

    directionChangedZ() {
        this.dirChangedZ = true;
    }

    rotToDir() {
        if ( !this.dirChangedX && !this.dirChangedZ ) return;

        this.rotateY( -this.angle );

        var newAngle = this.direction.angleTo(x_axis);

        newAngle = ( this.direction.z < 0 ) ? newAngle : -newAngle;

        this.angle = newAngle;
        this.rotateY( this.angle );

        this.dirChangedX = false;
        this.dirChangedZ = false;
    }

    update() {   //needs to check if its out of bounds and colisions 
        this.speed *= 0.995;
        this.move();
        return -100 < this.position.x && this.position.x < 100
            && -100 < this.position.z && this.position.z < 100;
    }
}
