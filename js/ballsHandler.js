class ballsHandler {

    constructor() {
        this.balls = [];
    }

    addBall(ball) {
        this.balls.push(ball);
    }

    removeBall(index) {
        this.balls.splice(index, 1);
    }

    update () {
        //this.ball.forEach( ball => { ball.update(); } ); /* doesnt allow for removel */

        for (var i = this.balls.length - 1; i >= 0; i--) {
            if ( !this.balls[i].update() )
                this.removelBall(index); /* ball out of bounds; is it neccessary to remove from scene ??? */
        }
    }
}