var time;

var scene, renderer, aspectratio;

var topCam;
var persCam;
var followBallCam;

var activeCam;

var cannons;
var balls;

function init() {
    'use strict'

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    aspectratio = window.innerWidth / window.innerHeight;

    document.body.appendChild(renderer.domElement);

    time = new timeProj();

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

    createFloor();
    createAllWalls(70, 0, 0);

    cannons = new cannonHandler();
    balls = new ballsHandler();
}

function createCameras() {
    topCam = new TopCamera();
    persCam = new PresCamera();

    activeCam = topCam;
}

function render() {
    'use strict'

    renderer.render(scene, activeCam);
}

function animate() {
    'use strict'

    time.updateTime();
    cannons.update();
    balls.update();
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
        case 32: // key space - shoot ball
            cannons.selectedShoot();
            break;
        case 49: // key 1 - top view camera (orthographic)
            activeCam = topCam;
            activeCam.resize();
            break;
        case 50: // key 2 - all field of play (perspective)
            activeCam = persCam;
            activeCam.resize();
            break;
        case 51: // key 3 - ball camera (perspective)
            activeCam = followBallCam;
            activeCam.resize();
            break;
        case 37: // key Left - move selected cannon angle left
            cannons.selectedLeftMovement();
            break;
        case 39: // key Right - move selected cannon angle right
            cannons.selectedRightMovement();
            break;
        case 81: // key Q & q - choose cannon 0
            cannons.select(0);
            break;
        case 87: // key W & w - choose cannon 1
            cannons.select(1);
            break;
        case 69: // key E & e - choose cannon 2
            cannons.select(2);
            break;
        case 82: // key R & r - show hide balls axis
            balls.axisShowHide();
            break;
    }
}

function onKeyUp(e) {
    'use strict';

    switch(e.keyCode){
        case 37: // key Left - move selected cannon angle left
            cannons.selectedStopLeftMovement();
            break;
        case 39: // key Right - move selected cannon angle right
            cannons.selectedStopRightMovement();
            break;
    }
}
