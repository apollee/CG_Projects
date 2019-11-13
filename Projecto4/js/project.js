var time;

var scene, renderer, aspectratio;

var presCam, ortoCam, activeCam;

var gLight;
var pLight;

var dice;
var ball;

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

    time = new timeProj();
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

    time.updateTime();

    if ( !time.isFreezed() ) {
        dice.spin();
        ball.dualSpin();
    }

    if (toggleIlumination) smartMeshes.forEach( smesh => { smesh.turnOnOffIlumination(); } );
    if (toggleWireframe) allMaterials.forEach( material => { material.wireframe = !material.wireframe; } );

    toggleWireframe = false;
    toggleIlumination = false;

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
            gLight.onOffSwitch();
            break;
        case 80: // key P & p - turn on/off pontual light source
            pLight.onOffSwitch();
            break;
        case 76: // key L & l - activate/deactivate illumination calculation
            toggleIlumination = true;
            break;
        case 87: // key W & w - active/desactive wireframe 
        toggleWireframe = true;
            break;
        case 66: // key B & b - ball movement
            ball.toggleAcelaration();
            break;
        case 82: // key R & r - reset scene

            break;
        case 83: // key S & s - stop scene
            time.freezeUnfreeze();
            break;
    }
}

function onKeyUp(e) {
    'use strict';
    /*vejam se acham que vale a pena ter keyup neste projeto*/
}
