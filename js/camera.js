class robotCamera
{
    constructor() {
        var ws = this.normalizeWindow();

        this.camera = new THREE.OrthographicCamera(ws[0], ws[1], ws[2], ws[3], 1, 1000 );
        
        this.n = 1;
        this.topView();
    }

    topView() {
        this.n = 1;
        this.camera.position.set(0, window.innerHeight/2, 0);
        this.lookAt();
    }

    sideView() {
        this.n = 2;
        var width = window.innerWidth;
        var height = window.innerHeight;

        this.camera.position.set( width/2, 0, 0);
        this.lookAt()
    }

    frontView() {
        this.n = 3;
        var width = window.innerWidth;
        var height = window.innerHeight;
        
        this.camera.position.set(0, 0, 500);
        this.lookAt();
    }

    update() {
        if ( this.n == 1 ) this.topView();
        else if ( this.n == 2 ) this.sideView();
        else if ( this.n == 3 ) this.frontView();
    }

    resize() {
/*
        var ws = this.normalizeWindow();
        this.camera.left = ws[0];
        this.camera.right = ws[1];
        this.camera.up = ws[2];
        this.camera.bottom = ws[3];
*/
        this.update();
    }

    lookAt() {
        this.camera.lookAt(scene.position);
    }

    normalizeWindow() {
        var width = window.innerWidth;
        var height = window.innerHeight;
/*
        if ( width = 16/9*height ) return [-width/10, width/10, height/10, -height/10];

        else if ( width > 16/9*height ) {
            var z = width - 16/9*height;

            return [-width/10 - z/2, width/10 + z/2, height/10, -height/10];
        }

        else if ( width < 16/9*height ) {
            var z = height - 9/16*width;

            return [-width/10, width/10, height/10 + z/2, -height/10 - z/2];
        }
*/      width = 160;
        height = 90;
        return [-width/2, width/2, height/2, -height/2];
    }

    getCamera() {
        return this.camera;
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