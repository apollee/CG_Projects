var time;

var scene, renderer, aspectratio;

var orthoCam;
var persCam;

var cannons = {};
var selected_cannon;

var balls;

function init() {
    'use strict'

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    aspectratio = window.innerWidth/ window.innerHeight * 10;

    document.body.appendChild(renderer.domElement);

    balls = new ballsHandler();
    time = new timeProj();

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


    cannons["cannon1"] = new Cannon(-30, 0, -25);
    cannons["cannon2"] = new Cannon(-30, 0,   0);
    cannons["cannon3"] = new Cannon(-30, 0,  25);

    createWall(50, 0, 0);

    for(var i = 0; i < THREE.Math.randFloat(1, 6); i++){
        var ball = new Ball(THREE.Math.randFloat(4, 46), 0, THREE.Math.randFloat( -24, 24), 2)
        scene.add(ball);
    }

    scene.add(cannons["cannon1"]);
    scene.add(cannons["cannon2"]);
    scene.add(cannons["cannon3"]);

    selected_cannon = cannons["cannon1"];
}
4
function createCamera() {
    orthoCam = new cannonCamera();
}

function render() {
    'use strict'

    renderer.render(scene, orthoCam);
    //renderer.render(scene, persCam);
}

function animate() {
    time.updateTime();
    selected_cannon.update();
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
            selected_cannon.leftMovement();
            break;
        case 39: // key Right - move selected cannon angle right
            selected_cannon.rightMovement();
            break;
        case 81: // key Q & q - choose cannon 1
            selected_cannon = cannons["cannon1"];
            break;
        case 87: // key W & w - choose cannon 2
            selected_cannon = cannons["cannon2"];
            break;
        case 69: // key E & e - choose cannon 3
            selected_cannon = cannons["cannon3"];
            break;
    }
}

function onKeyUp(e) {
    'use strict';

    switch(e.keyCode){
        case 37: // key Left - move selected cannon angle left
            selected_cannon.stopLeftMovement();
            break;
        case 39: // key Right - move selected cannon angle right
            selected_cannon.stopRightMovement();
            break;
    }
}
