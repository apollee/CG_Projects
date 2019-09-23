
var camera, scene, renderer;
var material, geometry, mesh;

function createCamera(){
    'use strict';

    camera = new THREE.OrthographicCamera();
    camera.position.x = ;
    camera.position.y = ;
    camera.position.z = ;
    camera.lookAt(scene.position);
}

function createScene(){
    'use strict';
    scene = new THREE.Scene();
    scene.add(new THREE.AxisHelper(10));
}


function init() {
    'use strict';

    renderer = new THREE.WebGlRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    aspectratio = window.innerWidth / window.innerHeight;
    document.body.appendChild(renderer.domElement);

    createScene();
    render();

    window.addEventListener("keydown", onKeyDown);
}

function render() {
    'use strict';
    renderer.render(scene, camera);
}

function onKeyDown(e) {
    'use strict';

    switch(e.keyCode) {
        case 49: // Tecla 1

            break;
        case 51: // Tecla 3

            break;
        case 52: // Tecla 4
            materialArray[i].wireframe = !materialArray[i].wireframe;
            break;
        case 38:   // Tecla Up

            break;
        case 40:  // Tecla Down

            break;
        case 37: // Tecla Left

            break;
        case 39: // Tecla Right
            
            break;
        case 65: // Tecla A

        case 95: // Tecla a

        case 83: // Tecla S

        case 115: // Tecla s

        case 87: // Tecla W

        case : // Tecla w

        case 81: // Tecla Q

        case : // Tecla q
        
    }
}
