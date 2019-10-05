class Robot extends THREE.Object3D {
    constructor(x, y, z) {
        super();

        this.robotParts = {};
        this.vector = new THREE.Vector3(0, 0, 0);

        var car = createRobotCar(this, 0, 5.5, 0);
        var upperArm = createRobotUpperArm(car, 0, 0, 0);
        var lowerArm = createRobotLowerArm(upperArm, 0, 25.5, 0);
        var hand = createRobotHand(lowerArm, 0, 24, 0);
        
        this.position.set(x, y, z);

        this.robotParts["car"] = car;
        this.robotParts["upperArm"] = upperArm;
        this.robotParts["lowerArm"] = lowerArm;
        this.robotParts["hand"] = hand;

        this.left = false;
        this.right = false;
        this.up = false;
        this.down = false;
        this.shoulderPos = false;
        this.shoulderNeg = false;
        this.elbowPos = false;
        this.elbowNeg = false;

        this.lastTime = new Date();
    }

    spinArm (deg) {
        this.robotParts["upperArm"].rotateY(deg);
    }

    bendShoulder (deg) {
        this.robotParts["upperArm"].rotateZ(deg);
    }

    bendElbow (deg) {
        this.robotParts["lowerArm"].rotateZ(deg);
    }

    rightMovement () {
        this.right = true;
    }

    stopRightMovement() {
        this.right = false;
    }

    leftMovement () {
        this.left = true;
    }

    stopLeftMovement() {
        this.left = false;
    }

    upMovement () {
        this.up = true;
    }

    stopUpMovement () {
        this.up = false;
    }

    downMovement () {
        this.down = true;
    }

    stopDownMovement() {
        this.down = false;
    }

    zValue() {
        if ( (this.left && this.right) || !(this.left || this.right) ) return 0;
        else if ( this.left ) return -Math.PI/16;
        else if ( this.right ) return Math.PI/16;
    }


    xValue() {
        if ( (this.up && this.down) || !(this.up || this.down) ) return 0;
        else if ( this.up ) return Math.PI/16;
        else if ( this.down ) return -Math.PI/16;
    }

    setVector() {
        this.vector.set( this.xValue(), 0, this.zValue());
    }

    update() {
        var time = new Date();
        this.setVector()
        this.translateOnAxis(this.vector, (time.getTime() - this.lastTime.getTime())/10 );
        this.lastTime = time;
    }
}
