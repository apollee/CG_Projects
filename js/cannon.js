class Cannon extends THREE.Object3D {
    
    constructor(x, y, z){
        super();

        this.cannonParts = {};
        this.vector = new THREE.Vector3(0,0,0);

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

        this.lastTime = new Date();
        this.currentTime = new Date();

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

    notSelected(){

    }

    selected(){

    }

    spinCannon(){
        var deg = 0;
        if(this.right && !this.left){
            deg = -Math.PI/50;
        }else if(!this.right && this.left){
            deg = Math.PI/50;
        }

        this.rotateY(deg * (this.currentTime.getTime() - this.lastTime.getTime())/13);
    }

    updateTime(){
        this.lastTime = this.currentTime;
        this.currentTime = new Date();
    }


    update(){
        this.updateTime();
        this.spinCannon();
    }

}


