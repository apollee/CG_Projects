class robotCamera extends THREE.OrthographicCamera
{
    constructor() {
        var width = window.innerWidth / aspectratio;
        var height = window.innerHeight / aspectratio;
        super(-width, width, height, -height, 1, 2000 );

        this.n = 1;
        this.topView();
        this.resize();
    }

    topView() {
        this.n = 1;

        this.resize();

        this.position.set(0, window.innerHeight/2, 0);
        this.lookAt();
    }

    sideView() {
        this.n = 2;
        var width = window.innerWidth;

        this.resize();

        this.position.set( width/2, 0, 0);
        this.lookAt()
    }

    frontView() {
        this.n = 3;

        this.resize();
        
        this.position.set(0, 0, 500);
        this.lookAt();
    }

    update() {
        if ( this.n == 1 ) this.topView();
        else if ( this.n == 2 ) this.sideView();
        else if ( this.n == 3 ) this.frontView();
    }

    resize() {
        renderer.setSize(window.innerWidth, window.innerHeight);
        // update the Camera
        var ws = this.normalizeWindow();
        this.left = ws[0];
        this.right = ws[1];
        this.top = ws[2];
        this.bottom = ws[3];
        this.updateProjectionMatrix();
    }

    lookAt() {
        super.lookAt(scene.position);
    }

    normalizeWindow() {
        var width = window.innerWidth / aspectratio;
        var height = window.innerHeight / aspectratio;
        if ( this.n != 1 )
             return [-width, width, height * 1.6, -height * .4];
        else return [-width, width, height, -height];
    }
}

/*
function createCamera(x, y, z, lw, rw, th, bh) {
    'use strict';

    var camera = new THREE.OrthographicCamera(lw, rw, th, bh, 1, 1000 );
    camera.position.set(x, y, z);
    camera.lookAt(scene.position);

    return camera;
}

function createTopViewCamera() {
    'use strict';

    var width = window.innerWidth;
    var height = window.innerHeight;

    return createCamera(0, 50, 0, -width/2, width/2, height/2, -height/2,);
}

function createSideViewCamera() {
    'use strict';

    var width = window.innerWidth;
    var height = window.innerHeight;

    return createCamera(50, 0, 0, -width/2, width/2, height/2+25, -height/2+25,);
}

function createFrontViewCamera() {
    'use strict';

    var width = window.innerWidth;
    var height = window.innerHeight;

    return createCamera(0, 0, 50, -width/2, width/2, height/2+25, -height/2+25,);
}
*/