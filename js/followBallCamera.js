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
        this.aspect = renderer.getSize().width / renderer.getSize().height;
        this.updateProjectionMatrix();
    }
}
