 var width = 80, height = 66; /* atributed values for now */

function createCamera(x, y, z) { /* dont use this function directly */
    'use strict';

    var camera = new THREE.OrthographicCamera( -width/2, width/2, height/2, -height/2, 1, 1000 );
    camera.position.set(x, y, z);
    camera.lookAt(scene.position);

    return camera;
}

function createTopViewCamera() {
  'use strict';

  return createCamera(0, 50, 0);
}

function createSideViewCamera() {
  'use strict';

  return createCamera(50, 0, 0);
}

function createFrontViewCamera() {
  'use strict';

  return createCamera(0, 0, 50);
}