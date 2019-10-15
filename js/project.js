var time;

var scene, renderer, aspectratio;

var orthoCam;
var persCam;

var cannons;
var balls;

function init() {
    'use strict'

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    aspectratio = window.innerWidth/ window.innerHeight * 10;

    document.body.appendChild(renderer.domElement);

    time = new timeProj();
    balls = new ballsHandler();

    createScene();
    createCamera();
    render();


    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    window.addEventListener("resize", onResize);
}

function createScene() {
    'use strict';

    scene = new THREE.Scene();
    scene.add(new THREE.AxisHelper(5));

    createAllWalls(50, 0, 0);

    cannons = new cannonHandler(scene);

    for(var i = THREE.Math.randFloat(1, 6); i >= 0 ; i--) {
        var ball = new Ball(THREE.Math.randFloat(4, 46), 0, THREE.Math.randFloat( -24, 24), 2);

        balls.addBall(ball);
        scene.add(ball);
    }
}

function createCamera() {
    orthoCam = new cannonCamera();
}

function render() {
    'use strict'

    renderer.render(scene, orthoCam);
    //renderer.render(scene, persCam);
}

function animate() {
    'use strict'

    time.updateTime();
    cannons.update();
    balls.update();

    render();
    requestAnimationFrame(animate);
}

function onResize() {
    'use strict';
    //
}

function onKeyDown(e) {
    'use strict';

    switch(e.keyCode){
        case 32:
            cannons.selectedShoot();
            break;
        case 49: // key 1 - top view camera (orthographic)
            orthoCam.topView();
            break;
        case 50: // key 2 - all field of play (perspective)
        scene.traverse( function (node) {//MUDAR ESTA MERDA!!!!
            if (node instanceof THREE.Mesh) {
                node.material.wireframe = !node.material.wireframe;
            }
        } );
            break;
        case 51: // key 3 - ball camera (perspective)
            ;
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
