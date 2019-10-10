class Cannon extends THREE.Object3D {
    
    constructor(x, y, z){
        super();

        this.cannonParts = {};

        var base = createCannonBase(this, 0, 0, 0);
        var tube = createCannonTube(base, 0, 7, 0);
        var hat = createCannonHat(tube, -20, 0, 0);

        this.position.set(x, y, z);
        
        this.cannonParts["base"] = base;
        this.cannonParts["tube"] = tube;
        this.cannonParts["hat"] = hat;

        this.left = false;
        this.right = false;
        this.up = false;
        this.down = false;
    }

    stopRightMovement(){
        this.right = false;
    }
    
    stopLeftMovement(){
        this.left = false;
    }
    
    rightMovement(){
        this.right = true;
    }
    
    leftMovement(){
        this.left = true;
    }
}

