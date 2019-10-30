class OrtoCamera extends THREE.OrthographicCamera {
    
    constructor(frame_position) {
        var width = (window.innerWidth / aspectratio) / 6;
        var height = (window.innerHeight / aspectratio) / 6;
        super(-width, width, height, -height, 1, 2000 );
        this.position.set(-200, 200, 5);//-30, window.innerHeight/2, 500);
        this.lookAt(frame_position);
    }

    resize() {
        var width = (window.innerWidth / aspectratio) / 6;
        var height = (window.innerHeight / aspectratio) / 6;
        this.left = -width;
        this.right = width;
        this.top = height;
        this.bottom = -height;
        this.updateProjectionMatrix();
    }

    update() {} /**/
}

class PresCamera extends THREE.PerspectiveCamera {

    constructor() {
        super(90, window.innerWidth / window.innerHeight, 1, 1000);

        this.position.set(-10, 200, 500);
        super.lookAt(new THREE.Vector3(60,200,0));
    }

    resize() {
        this.aspect = renderer.getSize().width / renderer.getSize().height;
        this.updateProjectionMatrix();
    }
    
    update() {} /**/
}

