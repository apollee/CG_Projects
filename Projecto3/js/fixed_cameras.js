class OrtoCamera extends THREE.OrthographicCamera {
    
    constructor() {
        var width = (window.innerWidth / aspectratio) / 7;
        var height = (window.innerHeight / aspectratio) / 7;
        super(-width, width, height, -height, 1, 2000 );
        this.sideView();
    }

    sideView() {
        this.position.set(0, 0, window.innerWidth/2);
        this.lookAt();
    }

    lookAt() {
        super.lookAt(scene.position);
    }

    resize() {
        var width = (window.innerWidth / aspectratio) / 7;
        var height = (window.innerHeight / aspectratio) / 7;
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
        super(75, window.innerWidth / window.innerHeight, 1, 1000);

        this.position.set(0, 0, 100);
        super.lookAt(scene.position);
    }

    resize() {
        this.aspect = renderer.getSize().width / renderer.getSize().height;
        this.updateProjectionMatrix();
    }
    
    update() {} /**/
}

