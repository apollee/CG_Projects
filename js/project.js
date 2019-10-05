/* global THREE */

var scene, renderer;
var camera;
var robot;

var aspectratio;
function init() {
    'use strict';

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    aspectratio = window.innerWidth/ window.innerHeight * 15;

    document.body.appendChild(renderer.domElement);

    createScene();
    createCamera();
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
    robot = new Robot(-20, 0, 0);

    robot.bendElbow( -Math.PI/2 );
    
    scene.add( robot );
}

function createCamera() {
    camera = new robotCamera();
}


function render() {
    'use strict';

    renderer.render(scene, camera);
}

function animate() {
    robot.update();
    render();
    requestAnimationFrame(animate);
}

function onResize() {
    'use strict';
    camera.resize();
}

function onKeyDown(e) {
    'use strict';
    
    switch(e.keyCode) {

        case 49: // key 1 - top view camera
            camera.topView();
            break;
        case 50: // key 2 - side view camera
            camera.sideView();
            break;
        case 51: // key 3 - front view camera
            camera.frontView();
            break;

        case 52: // key 4
            scene.traverse( function (node) {
                if (node instanceof THREE.Mesh) {
                    node.material.wireframe = !node.material.wireframe;
                }
            } );
            break;

        case 38:   // key Up - move robot up
            robot.upMovement();
            break;
        case 40:  // key Down - move robot down
            robot.downMovement();
            break;
        case 37: // key Left - move robot left
            robot.leftMovement();
            break;
        case 39: // key Right - move robot right
            robot.rightMovement();
            break;

        case 65: // key A e a - controlar angulo 1
            robot.spinArm( Math.PI/32 );
            break;
        case 83: // key S e s - controlar angulo 1
            robot.spinArm( -Math.PI/32 );
            break;
        case 87: // key W e w - controlar angulo 2
            robot.bendShoulder( -Math.PI/64 );
            break;
        case 81: // key Q e q - controlar angulo 2
            robot.bendShoulder( Math.PI/64 );
            break;
    }
}

function onKeyup(e) {
    'use strict'

    switch(e.keyCode) {
        case 38:   // key Up - move robot up
            robot.stopUpMovement();
            break;
        case 40:  // key Down - move robot down
            robot.stopDownMovement();
            break;
        case 37: // key Left - move robot left
            robot.stopLeftMovement();
            break;
        case 39: // key Right - move robot right
            robot.stopRightMovement();
            break;
    }
}
