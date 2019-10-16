class Cannon extends THREE.Object3D {
    
    constructor(x, y, z, n) {
        super();

        this.name = "cannon" + n;

        this.vector = new THREE.Vector3(0,0,0);

        var base = createCannonBase(this, 0, 0, 0, n);
        var tube = createCannonTube(base, 0, 3.5, 0, n);
        var hat = createCannonHat(tube, -10, 0, 0, n);

        /* for colour change purposes */
        for (var key in tube.children)
            if ( tube.children[key].name === ("cannonTubeCyl"+n) )
                this.tubeCylColor = tube.children[key].material.color;

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

        this.tubeCylColor.setStyle('#4e635a');
    }

    select() {
        this.tubeCylColor.setStyle('#5c4f4f');
    }

    spinCannon() { 
        var deg = 0;

        if ( this.right && !this.left )
            deg = -Math.PI/50;
        
        else if ( !this.right && this.left )
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
