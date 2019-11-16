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

class PauseCamera extends OrtoCamera {
    constructor() {
        super();

        this.position.set(0, 220, 0);

        createPauseMessage(0, 210, -50);
    }

}

function createPauseMessage(x, y, z) {
    var texture = new THREE.TextureLoader().load('textures/pause1.jpeg');
    var pauseMsg = new THREE.Object3D();
    var material = new THREE.MeshBasicMaterial({map: texture});
    var geometry = new THREE.PlaneGeometry(100, 50, 100, 50);
    var mesh = new THREE.Mesh(geometry, material);

    mesh.rotateX(-Math.PI/2);
    pauseMsg.add(mesh);
    pauseMsg.position.set(x, y, z);
    scene.add(pauseMsg);
}

class PresCamera extends THREE.PerspectiveCamera {

    constructor() {
        super(90, window.innerWidth / window.innerHeight, 1, 1000);

        this.initialAspect = this.aspect;

        this.position.set(-25, 75, 120);
        super.lookAt(new THREE.Vector3(0, 0,0));
    }

    resize() {
        var aspectratio = window.innerWidth / window.innerHeight;
        
        if (aspectratio < this.initialAspect)
            this.zoom = aspectratio / this.initialAspect;

        this.aspect = aspectratio;
        this.updateProjectionMatrix();
    }
}

