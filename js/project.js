var cannons = {};
var scene, renderer, aspectratio;
var cameraOrthographic;
var camerasPerspective;

function init(){
    'use strict'

    renderer = new THREE.WebGLRenderer();
    //
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    aspectratio = window.innerWidth/ window.innerHeight * 15;

    document.body.appendChild(renderer.domElement);

    createScene();
    createCamera();
    render();

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    window.addEventListener("resize", onResize);
}

function createScene(){
    'use strict';

    scene = new THREE.Scene();
    scene.add(new THREE.AxisHelper(5));


    cannons["cannon1"] = new Cannon(-30, 0, -25);
    cannons["cannon2"] = new Cannon(-30, 0,   0);
    cannons["cannon3"] = new Cannon(-30, 0,  25);

    createWall(50, 0, 0);

    scene.add(cannons["cannon1"]);
    scene.add(cannons["cannon2"]);
    scene.add(cannons["cannon3"]);
}

function createCamera(){
    cameraOrthographic = new cannonCamera();
}

function render(){
    'use strict'

    renderer.render(scene, cameraOrthographic);
    //renderer.render(scene, camerasPerspective);
}

function animate() {
    //.update();
    render();
    requestAnimationFrame(animate);
}

function onResize(){
    'use strict';
    //
}

function onKeyDown(e){
    'use strict';

    switch(e.keyCode){
        case 49: // key 1 - top view camera (orthographic)
            cameraOrthographic.topView();
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
            cannon.leftMovement();
            break;
        case 39: // key Right - move selected cannon angle right
            cannon.rightMovement();
            break;
        case 81: // key Q & q - choose cannon 1
            ;
            break;
        case 87: // key W & w - choose cannon 2
            ;
            break;
        case 69: // key E & e - choose cannon 3
            ;
            break;
    }
}

function onKeyUp(e){
    'use strict';

    switch(e.keyCode){
        case 37: // key Left - move selected cannon angle left
            cannon.stopLeftMovement();
            break;
        case 39: // key Right - move selected cannon angle right
            cannon.stopRightMovement();
            break;
    }
}