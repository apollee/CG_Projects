class Cannon extends THREE.Object3D {
    
    constructor(x, y, z) {
        super();

        this.vector = new THREE.Vector3(0,0,0);

        var base = createCannonBase(this, 0, 0, 0);
        var tube = createCannonTube(base, 0, 3.5, 0);
        var hat = createCannonHat(tube, -10, 0, 0);

        this.position.set(x, y, z);

        this.left = false;
        this.right = false;
        this.up = false;
        this.down = false;
    }

    stopRightMovement() {
        this.right = false;
    }
    
    stopLeftMovement() {
        this.left = false;
    }
    
    rightMovement() {
        this.right = true;
    }
    
    leftMovement() {
        this.left = true;
    }

    unSelect() {
        this.stopLeftMovement();
        this.stopRightMovement();

        /* colour */
    }

    select() {

        /* colour */
    }

    spinCannon() { 
        var deg = 0;

        if(this.right && !this.left)
            deg = -Math.PI/50;
        
        else if(!this.right && this.left)
            deg = Math.PI/50;

        this.rotateY(deg * (time.getTimeDiff())/13);
    }

    shoot() {
        /* return created ball */
    }

    update() {
        this.spinCannon();
    }

}
