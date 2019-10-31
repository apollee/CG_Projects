var scene, renderer, aspectratio;

var presCam;
var ortoCam;
var activeCam;
var frame;

function init() {
    'use strict'

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    aspectratio = window.innerWidth / window.innerHeight;

    document.body.appendChild(renderer.domElement);

    createScene();
    createCameras();
    render();


    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    window.addEventListener("resize", onResize);
}

function createScene() {
    'use strict';

    scene = new THREE.Scene();
    var icosaedro = new Icosaedro(-80, 150, 180);
    createFloor();
    createAllWalls(0, 0, 0);
    frame = createPaintingFrame(-30, 200, 0);
    createPedestal(40, 10, 50);
}

function createCameras() {
    ortoCam = new OrtoCamera(frame.position);
    presCam = new PresCamera();

    activeCam = ortoCam;
}

function render() {
    'use strict'

    renderer.render(scene, activeCam);
}

function animate() {
    'use strict'

    //time.updateTime();
    activeCam.update();

    render();
    requestAnimationFrame(animate);
}

function onResize() {
    'use strict';
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    activeCam.resize();
}

function onKeyDown(e) {
    'use strict';

    switch(e.keyCode){
        case 49: // key 1 - turn on/off spotlight 1
            break;
        case 50: // key 2 - turn on/off spotlight 2
            scene.traverse( function (node) {
                if (node instanceof THREE.Mesh) {
                    node.material.wireframe = !node.material.wireframe;
                }
            } );
            break;
        case 51: // key 3 - turn on/off spotlight 3
            break;
        case 52: // key 4 - turn on/off spotlight 4
            break;
        case 53: // key 5 - top camera view
            activeCam = presCam;
            presCam.resize();
            break;
        case 54: // key 6 - painting camera 
            activeCam = ortoCam;
            activeCam.resize();
            break;
        case 81: // key Q & q - turn on/off light source
            break;
        case 87: // key W & w - activate/deactivate illumination calculation
            break;
        case 69: // key E & e - alternate between the shading type
            break;
    }
}

function onKeyUp(e) {
    'use strict';
    /*vejam se acham que vale a pena ter keyup neste projeto*/
}
