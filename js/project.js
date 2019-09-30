/* global THREE */

var scene, renderer;
var cameras = [], camera;

var stopUP = false;
var stopDOWN = false;

var controlUP = false;
var controlDOWN = false;

var stopLEFT = false;
var stopRIGHT = false;

var controlLEFT = false;
var controlRIGHT = false;

function init() {
    'use strict';

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);

    createScene();
    createAllCameras();
    render();

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyup);
    window.addEventListener("resize", onResize);
}

function createScene() {
    'use strict';
    
    scene = new THREE.Scene();
    scene.add(new THREE.AxisHelper(5));

    createTarget(20, 15, 0);
    createRobot(robotParts, -20, 0, 0);

    bendElbow( -Math.PI/2 );
    //bendShoulder( Math.PI/4 );
    //spinArm( Math.PI/8 );
    
    scene.add( robotParts["robot"] );
}

function createAllCameras() {
    cameras.push( createTopViewCamera() );
    cameras.push( createSideViewCamera() );
    cameras.push( createFrontViewCamera() );

    camera = cameras[2];
}


function render() {
    'use strict';

    renderer.render(scene, camera);
}

function onResize() {
    'use strict';

    renderer.setSize(window.innerWidth, window.innerHeight);
    if(window.innerHeight > 0 && window.innerWidth > 0) {
        camera.aspect = renderer.getSize().width / renderer.getSize().height;
        camera.updateProjectionMatrix();
    }
    render();
}

function onKeyDown(e) {
    'use strict';
    
    switch(e.keyCode) {

        case 49: // key 1 - top view camera
            camera = cameras[0];
            break;
        case 50: // key 2 - side view camera
            camera = cameras[1];
            break;
        case 51: // key 3 - front view camera
            camera = cameras[2];
            break;

        case 52: // key 4
            scene.traverse( function (node) {
                if (node instanceof THREE.Mesh) {
                    node.material.wireframe = !node.material.wireframe;
                }
            } );
            break;

        case 38:   // key Up - move robot up
            upMovement();
            break;
        case 40:  // key Down - move robot down
            downMovement();
            break;
        case 37: // key Left - move robot left
            leftMovement();
            break;
        case 39: // key Right - move robot right
            rightMovement();
            break;

        case 65: // key A e a - controlar angulo 1
            spinArm( Math.PI/16 );
            break;
        case 83: // key S e s - controlar angulo 1
            spinArm( -Math.PI/16 );
            break;
        case 87: // key W e w - controlar angulo 2
            bendShoulder( -Math.PI/16 );
            break;
        case 81: // key Q e q - controlar angulo 2
            bendShoulder( Math.PI/16 );
            break;
    }

    render();
}

function onKeyup(e) {
    'use strict'

    switch(e.keyCode) {
        case 38:   // key Up - move robot up
            stopUpMovement();
            break;
        case 40:  // key Down - move robot down
            stopDownMovement();
            break;
        case 37: // key Left - move robot left
            stopLeftMovement();
            break;
        case 39: // key Right - move robot right
            stopRightMovement();
            break;
    }
}
