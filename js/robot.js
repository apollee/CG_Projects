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
        this.armPos = false;
        this.armNeg = false;

        this.lastTime = new Date();
        this.currentTime = new Date();
    }

    bendElbow (deg) { // doesnt matter
        this.robotParts["lowerArm"].rotateZ(deg);
    }


    posSpinArm () {
        this.armPos = true;
    }

    negSpinArm () {
        this.armNeg = true;
    }

    posBendShoulder () {
        this.shoulderPos = true;
    }

    negBendShoulder () {
        this.shoulderNeg = true;
    }

    stopPosSpinArm () {
        this.armPos = false;
    }

    stopNegSpinArm () {
        this.armNeg = false;
    }

    stopPosBendShoulder () {
        this.shoulderPos = false;
    }

    stopNegBendShoulder () {
        this.shoulderNeg = false;
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
        if ( this.left && this.right ) return 0;
        else if ( this.left && !this.right) return -Math.PI/16;
        else if ( this.right && !this.left ) return Math.PI/16;
        else return 0;
    }

    xValue() {
        if      ( this.up && this.down ) return 0;
        else if ( this.up && !this.down) return Math.PI/16;
        else if ( this.down && !this.up ) return -Math.PI/16;
        else return 0;
    }

    setVector() {
        this.vector.set( this.xValue(), 0, this.zValue());
    }

    move() {
        this.setVector()
        this.translateOnAxis(this.vector, (this.currentTime.getTime() - this.lastTime.getTime())/10 );
    }

    spinArm() {
        var deg = 0;
        if      ( this.negSpinArm && !this.posSpinArm) deg = Math.PI/32;
        else if ( this.posSpinArm && !this.negSpinArm ) deg = -Math.PI/32;

        this.robotParts["upperArm"].rotateY(deg);
    }

    bendShoulder() {
        var deg = 0;
        if      ( this.negBendShoulder && !this.posBendShoulder) deg = Math.PI/32;
        else if ( this.posBendShoulder && !this.negBendShoulder ) deg = -Math.PI/32;
        
        this.robotParts["upperArm"].rotateZ(deg);
    }

    updateTime() {
        this.lastTime = this.currentTime;
        this.currentTime = new Date();
    }

    update() {
        this.updateTime();
        this.move();
        this.spinArm();
        this.bendShoulder()
    }
}
