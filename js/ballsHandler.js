class ballsHandler {

    constructor() {
        this.balls = [];

        this.axisVisibleState = true;

        followBallCam = new FollowBallCamera();
        
        var x1 = [-15, 22];
        var x2 = [28, 65];
        var z1 = [-33, -3];
        var z2 = [3, 33];

        for (var i = 0; i < 4 ; i++){
            var valuex = i <= 1 ? x1 : x2;
            var valuez = i % 2 == 0 ? z1: z2;
            this.addBall( new Ball(THREE.Math.randFloat(valuex[0], valuex[1]), 3,
                                   THREE.Math.randFloat(valuez[0], valuez[1]),
                                   new THREE.Vector3( 0, 0, 0), 0 ) );
        }
    }

    addBall(ball) {
        ball.axisShowHide(this.axisVisibleState);
        this.balls.push(ball);
        scene.add(ball);

        followBallCam.followBall(ball);
    }

    removeBall(index) {
        if ( index == this.balls.length - 1 ) followBallCam.followBall( this.balls[index-1] );

        scene.remove(this.balls[index]);
        this.balls.splice(index, 1);
    }

    axisShowHide() {
        this.axisVisibleState = !this.axisVisibleState;
        this.balls.forEach( ball => { ball.axisShowHide( this.axisVisibleState ); } );
    }

    dealWithWallColisions() {
        var ball;
        for (var i = 0; i < this.balls.length; i++) {
            ball = this.balls[i];

            if ( 65 < ball.getPosition().x && ball.getPosition().x < 75 && ball.getDirection().x > 0) {
                ball.getDirection().x *= -1;
                ball.directionChangedX();
            }
            if ( 43 < ball.getPosition().z && ball.getPosition().z < 53
                && ball.getPosition().x > -55 && ball.getDirection().z > 0 ) {

                ball.getDirection().z *= -1;
                ball.directionChangedZ();
            }
            if ( -53 < ball.getPosition().z && ball.getPosition().z < -43
                && ball.getPosition().x > -55 && ball.getDirection().z < 0 ) {

                ball.getDirection().z *= -1;
                ball.directionChangedZ();
            }
            ball.rotToDir();
        }
    }

    dealWithBallsColisions() {
        for (var ball in balls) {

        }
    }

    update () {
        for (var i = this.balls.length - 1; i >= 0; i--) {
            if ( !this.balls[i].update() )
                this.removeBall(i); /* ball out of bounds */
        }

        this.dealWithWallColisions();
        this.dealWithBallsColisions();
    }
}