class FollowBallCamera extends THREE.PerspectiveCamera {
    constructor() {
        super();
    }

    followBall(ball) {
        this.ball = ball;

        this.update();        
    }

    update() {
        var ballPos = this.ball.getPosition();
        var ballDir = this.ball.getDirection();

        if(ballDir.x !=0 || ballDir.y != 0 || ballDir.z != 0){
            this.position.set(ballPos.x - ballDir.x*10,
                              ballPos.y - ballDir.y*10,
                              ballPos.z - ballDir.z*10 )
        }
        else{
            this.position.set(ballPos.x - 10,
                              ballPos.y - ballDir.y*10,
                              ballPos.z - 10 )
        }

        this.lookAt(ballPos);
    }

    resize() {
        this.aspect = renderer.getSize().width / renderer.getSize().height;
        this.updateProjectionMatrix();
    }
}
