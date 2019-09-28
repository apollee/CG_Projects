 var width = 110, height = 60; /* atributed values for now */

function createCamera(x, y, z, lw, rw, th, bh) { /* dont use this function directly */
    'use strict';

    var camera = new THREE.OrthographicCamera(lw, rw, th, bh, 1, 1000 );
    camera.position.set(x, y, z);
    camera.lookAt(scene.position);

    return camera;
}

function createTopViewCamera() {
  'use strict';

  return createCamera(0, 50, 0, -width/2, width/2, height/2, -height/2,);
}

function createSideViewCamera() {
  'use strict';

  return createCamera(50, 0, 0, -width/2, width/2, height/2+25, -height/2+25,);
}

function createFrontViewCamera() {
  'use strict';

  return createCamera(0, 0, 50, -width/2, width/2, height/2+25, -height/2+25,);
}