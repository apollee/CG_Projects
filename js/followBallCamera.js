class FollowBallCamera extends THREE.PerspectiveCamera {

    constructor(ball) {
        super();
        this.ball = ball;

        this.position.set(-20, 3, 10);
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
