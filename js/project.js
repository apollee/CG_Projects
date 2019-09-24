/* global THREE */

var camera, scene, renderer;

function createCamera() {
    'use strict';

    var width = 50; /* atributed values for now */
    var height = 50;

    camera = new THREE.OrthographicCamera( -width/2, width/2, height/2, -height/2, 1, 1000 );
    camera.position.x = 35;
    camera.position.y = 20;
    camera.position.z = 50;
    camera.lookAt(scene.position);
}

function createScene(){
    'use strict';
    scene = new THREE.Scene();
    scene.add(new THREE.AxisHelper(10));

    createTarget(0, 0, 0)
}


function render() {
    'use strict';
    renderer.render(scene, camera);
}

function init() {
    'use strict';

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);

    createScene();
    createCamera();
    render();

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
}

function animate() {

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
        /*case 49: // Tecla 1 - Cameral vista lateral/topo(?)

            break;
        case 51: // Tecla 3 - Camera vista frontal

            break;*/
        case 52: // Tecla 4
            scene.traverse(function (node){
                if(node instanceof THREE.Mesh){
                    node.material.wireframe = !node.material.wireframe;
                }
            });
            break;
        /*case 38:   // Tecla Up - deslocar o robo

            break;
        case 40:  // Tecla Down

            break;
        case 37: // Tecla Left

            break;
        case 39: // Tecla Right
            
            break;
        case 65: // Tecla A e a - controlar angulo 1

            break;
        case 83: // Tecla S e s - controlar angulo 1

            break;
        case 87: // Tecla W e w - controlar angulo 2

            break;
        case 81: // Tecla Q e q - controlar angulo 2

            break;*/
    }

    render();
}
