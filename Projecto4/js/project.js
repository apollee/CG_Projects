var scene, renderer, aspectratio;

var presCam;
var ortoCam;
var activeCam;
var frame;
var globLight;
var dice;
var ball;
var spotLHandler;

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
    window.addEventListener("resize", onResize);
}

function createScene() {
    'use strict';

    scene = new THREE.Scene();
    var board = createBoard();
    var dice = new Dice(0, 13, 0);
    var ball = new Ball(80, 10, 0);
    globLight = new globalLight();
}

function createCameras() {
    ortoCam = new OrtoCamera();
    presCam = new PresCamera();

    activeCam = presCam;
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

//needs to be changed
function onResize() {
    'use strict';
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    activeCam.resize();
}

function onKeyDown(e) {
    'use strict';

    switch(e.keyCode){
        case 49: // key 1 - pres view
            activeCam = presCam;
            activeCam.resize();
            break;
        case 50: // key 2 - orto camera 
            activeCam = ortoCam;
            activeCam.resize();
            break;
        case 68: // key D & d - turn on/off directional light source
            break;
        case 80: // key P & p - turn on/off pontual light source
            break;
        case 76: // key L & l - activate/deactivate illumination calculation
            smartMeshes.forEach( smesh => { smesh.turnOnOffIlumination(); } );
            break;
        case 87: // key W & w - active/desactive wireframe 
            break;
        case 66: // key B & b - ball movement
            break;
        case 82: // key R & r - reset scene
            break;
        case 83: // key S & s - stop scene
            break;
    }
}

function onKeyUp(e) {
    'use strict';
    /*vejam se acham que vale a pena ter keyup neste projeto*/
}
