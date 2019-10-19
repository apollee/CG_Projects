class ballsHandler {

    constructor() {
        this.balls = [];

        for (var i = THREE.Math.randFloat(1, 6); i >= 0 ; i--)
            this.addBall( new Ball(THREE.Math.randFloat(4, 46), 3, THREE.Math.randFloat( -24, 24), 2) );    
    }

    addBall(ball) {
        this.balls.push(ball);
        scene.add(ball);
    }

    removeBall(index) {
        scene.remove(this.balls[index]);
        this.balls.splice(index, 1);
    }

    axisShowHide() {
        this.balls.forEach( ball => { ball.axisShowHide(); } );
    }

    dealWithColisions() {

    }

    update () {
        //this.ball.forEach( ball => { ball.update(); } ); /* doesnt allow for removel */

        this.dealWithColisions;

        for (var i = this.balls.length - 1; i >= 0; i--) {
            if ( !this.balls[i].update() )
                this.removelBall(index); /* ball out of bounds */
        }
    }
}