class ballsHandler {

    constructor() {
        this.balls = [];

        this.axisVisibleState = true;

        followBallCam = new FollowBallCamera();
        
        var x1 = [-36, 2];
        var x2 = [8, 46];
        var z1 = [-25, -3];
        var z2 = [3, 25];

        for (var i = 0; i < 4 ; i++){
            var valuex = i <= 1 ? x1 : x2;
            var valuez = i % 2 == 0 ? z1: z2;
            this.addBall( new Ball(THREE.Math.randFloat(valuex[0], valuex[1]), 3,
                                   THREE.Math.randFloat(valuez[0], valuez[1]),
                                   new THREE.Vector3( 0, 0, 0) ) );
        }
    }

    addBall(ball) {
        ball.axisShowHide(this.axisVisibleState);
        this.balls.push(ball);
        console.log('yo');
        scene.add(ball);

        followBallCam.followBall(ball);
    }

    removeBall(index) {
        scene.remove(this.balls[index]);
        this.balls.splice(index, 1);
    }

    axisShowHide() {
        this.axisVisibleState = !this.axisVisibleState;
        this.balls.forEach( ball => { ball.axisShowHide( this.axisVisibleState ); } );
    }

    dealWithColisions() {

    }

    update () {
        for (var i = this.balls.length - 1; i >= 0; i--) {
            if ( !this.balls[i].update() )
                this.removeBall(i); /* ball out of bounds */
        }

        this.dealWithColisions();
    }
}