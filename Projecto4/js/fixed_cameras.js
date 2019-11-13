class OrtoCamera extends THREE.OrthographicCamera {
    
    constructor() {
        var aspectratio = window.innerWidth / window.innerHeight;

        var width = aspectratio > 1 ? 110 * aspectratio : 110;
        var height = aspectratio > 1 ? 110 : 110 / aspectratio;
        super(-width, width, height, -height, 1, 2000 );
        this.position.set(0, 200, 0);
        this.lookAt(new THREE.Vector3(0, 0,0));
    }

    resize() {
        var aspectratio = window.innerWidth / window.innerHeight;

        var width = aspectratio > 1 ? 110 * aspectratio : 110;
        var height = aspectratio > 1 ? 110 : 110 / aspectratio;
        this.left = -width;
        this.right = width;
        this.top = height;
        this.bottom = -height;
        this.updateProjectionMatrix();
    }
}

class PresCamera extends THREE.PerspectiveCamera {

    constructor() {
        super(90, window.innerWidth / window.innerHeight, 1, 1000);

        this.position.set(-10, 65, 120);
        super.lookAt(new THREE.Vector3(0, 0,0));
    }

    resize() {
        this.aspect = renderer.getSize().width / renderer.getSize().height;
        this.updateProjectionMatrix();
    }
}

