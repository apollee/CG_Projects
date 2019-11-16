var time;

var scene, renderer;

var reset = false

var presCam, ortoCam, pauseCam, activeCam;

var gLight;
var pLight;

var dice;
var ball;

function init() {
    'use strict'

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);

    createScene();
    createCameras();
    time = new timeProj();
    render();

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
}

function createScene() {
    'use strict';

    scene = new THREE.Scene();
    createBoard();
    dice = new Dice(0, 13, 0);
    ball = new Ball(80, 10, 0);
    pLight = new pointLight();
    gLight = new globalLight();
}

function resetScene() {
    reset = false;

    activeCam = presCam;
    activeCam.resize();

    gLight.reset();
    pLight.reset();

    resetMeshes();

    dice.reset();
    ball.reset();
}

function createCameras() {
    ortoCam = new OrtoCamera();
    presCam = new PresCamera();
    pauseCam = new PauseCamera();

    activeCam = presCam;
}

function render() {
    'use strict'

    renderer.render(scene, time.isFreezed() ? pauseCam : activeCam);
}

function animate() {
    'use strict'

    if (reset) resetScene();

    time.updateTime();

    if ( !time.isFreezed() ) {
        dice.spin();
        ball.dualSpin();
    }

    if (needToToggleIlumination) toggleIlumination();
    if (needToToggleWireframe) toggleWireframe();

    needToToggleIlumination = false;
    needToToggleWireframe = false;

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
        case 49: // key 1 - pres view
            activeCam = presCam;
            activeCam.resize();
            break;
        case 50: // key 2 - orto camera 
            activeCam = ortoCam;
            activeCam.resize();
            break;
        case 68: // key D & d - turn on/off directional light source
            gLight.onOffSwitch();
            break;
        case 80: // key P & p - turn on/off pontual light source
            pLight.onOffSwitch();
            break;
        case 76: // key L & l - activate/deactivate illumination calculation
            needToToggleIlumination = true;
            break;
        case 87: // key W & w - active/desactive wireframe 
            needToToggleWireframe = true;
            break;
        case 66: // key B & b - ball movement
            ball.toggleAcelaration();
            break;
        case 82: // key R & r - reset scene
            reset = true;
            break;
        case 83: // key S & s - stop scene
            time.freezeUnfreeze();
            break;
    }
}
