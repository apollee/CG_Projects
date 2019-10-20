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

    dealWithWallColisions() { // Using limits
        var ball;
        for (var i = 0; i < this.balls.length; i++) {
            ball = this.balls[i];

            if ( 65 < ball.getPosition().x && ball.getPosition().x < 75 && ball.getDirection().x > 0) {
                ball.getDirection().x *= -1;
                ball.directionChanged();
            }
            if ( 43 < ball.getPosition().z && ball.getPosition().z < 53
                && ball.getPosition().x > -55 && ball.getDirection().z > 0 ) {

                ball.getDirection().z *= -1;
                ball.directionChanged();
            }
            if ( -53 < ball.getPosition().z && ball.getPosition().z < -43
                && ball.getPosition().x > -55 && ball.getDirection().z < 0 ) {

                ball.getDirection().z *= -1;
                ball.directionChanged();
            }
            ball.rotToDir();
        }
    }

    dealWithBallsColisions() {
        var ballA, ballB;
        for (var i = 0; i < this.balls.length; i++) {
            ballA = this.balls[i];

            for (var j = i+1; j < this.balls.length; j++) {
                ballB = this.balls[j];

                if ( Math.pow(ballA.getPosition().x - ballB.getPosition().x, 2) // No colision;
                    + Math.pow(ballA.getPosition().z - ballB.getPosition().z, 2) > 36 ) continue;

                var v1 = ballA.speed;
                var v2 = ballB.speed;

                ballA.speed = v2;
                ballB.speed = v1;

                var dx1 = ballA.getDirection().x;
                var dz1 = ballA.getDirection().z;

                var dx2 = ballB.getDirection().x;
                var dz2 = ballB.getDirection().z;

                ballA.getDirection().x = dx2;
                ballA.getDirection().z = dz2;

                ballB.getDirection().x = dx1;
                ballB.getDirection().z = dz1;

                if ( dx2 != 0 && dz2 != 0 ) ballA.directionChanged(); 
                if ( dx1 != 0 && dz1 != 0 ) ballB.directionChanged();

                ballB.rotToDir();
            }
            ballA.rotToDir();
        }
    }

    update () {
        for (var i = this.balls.length - 1; i >= 0; i--) {
            if ( !this.balls[i].update() )
                this.removeBall(i); /* ball out of bounds */
        }

        this.dealWithBallsColisions();
        this.dealWithWallColisions();
    }
}
/*
dealWithBallsColisions() {
        var ballA, ballB;
        for (var i = 0; i < this.balls.length; i++) {
            ballA = this.balls[i];

            for (var j = i+1; j < this.balls.length; j++) {
                ballB = this.balls[j];

                if ( Math.pow(ballA.getPosition().x - ballB.getPosition().x, 2)
                    + Math.pow(ballA.getPosition().z - ballB.getPosition().z, 2) > 36 ) continue;

                console.log("nao cumi a maria mas o cu ja");

                var theta1 = ballA.angle;
                var theta2 = ballB.angle;

                var phi = Math.atan2(ballB.getPosition().z - ballA.getPosition().z,
                                     ballB.getPosition().x - ballA.getPosition().x);

                var v1 = ballA.speed;
                var v2 = ballB.speed;

                if ( v1  )
                    var dx1F = 2 * v2 * Math.cos(theta2 - phi) /
                    ( 2 * Math.cos(phi) + v1 * Math.sin(theta1 - phi) * Math.cos(phi + Math.PI / 2) );

                    var dx2F = 2 * v2 * Math.cos(theta2 - phi) /
                    ( 2 * Math.sin(phi) + v1 * Math.sin(theta1 - phi) * Math.sin(phi + Math.PI / 2) );

                    var dz1F = 2 * v1 * Math.cos(theta1 - phi) /
                    ( 2 * Math.cos(phi) + v2 * Math.sin(theta2 - phi) * Math.cos(phi + Math.PI / 2) );

                    var dz2F = 2 * v1 * Math.cos(theta1 - phi) /
                    ( 2 * Math.sin(phi) + v2 * Math.sin(theta2 - phi) * Math.sin(phi + Math.PI / 2) );

                    ballA.getDirection().x = dx1F;
                    ballA.getDirection().z = dz1F;

                    ballB.getDirection().x = dx2F;
                    ballB.getDirection().z = dz2F;

                

                ballA.directionChanged(); 
                ballB.directionChanged();

                ballB.rotToDir();
            }
            ballA.rotToDir();
        }
    }

*/