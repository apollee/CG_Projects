class FollowBallCamera extends THREE.PerspectiveCamera {

    constructor(ball) {
        super();
        this.ball = ball;
    }

    changeBall(ball) {
        this.ball = ball;
    }

    update() {
        
    }

    resize() {

    }
}
