class ballsHandler {

    constructor() {
        this.balls = [];

        this.axisVisibleState = true;

        for (var i = THREE.Math.randFloat(1, 6); i >= 0 ; i--)
            this.addBall( new Ball(THREE.Math.randFloat(4, 46), 3,
                                   THREE.Math.randFloat( -24, 24),
                                   new THREE.Vector3( 0, 0, 0) ) );    
    }

    addBall(ball) {
        ball.axisShowHide(this.axisVisibleState);
        this.balls.push(ball);
        scene.add(ball);
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
                this.removelBall(index); /* ball out of bounds */
        }

        this.dealWithColisions();
    }
}