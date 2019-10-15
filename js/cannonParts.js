/*
 * CannonBase
 */

function createCannonBase(obj, x, y, z) {
    'use strict';

    var base = new THREE.Group();

    createBottomBase(base, -1.5, 0, 0); // base referencial origin
    createSideBase(base, -1.5, 1, 3.5);
    createSideBase(base, -1.5, 1, -3.5);
    createWheel(base, -2, -2, 4.25);
    createWheel(base, -2, -2, -4.25);

    base.position.set(x, y, z);

    obj.add(base);

    return base;
}

function createBottomBase(obj, x, y, z) {
    'use strict';

    var material = new THREE.MeshBasicMaterial({color: '#be9b7b', wireframe: true});
    var geometry = new THREE.BoxGeometry(9, 3, 6, 9, 3, 6);
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    obj.add(mesh);
}

function createSideBase(obj, x, y, z) {
    'use strict';

    var material = new THREE.MeshBasicMaterial({color: '#be9b7b', wireframe: true});
    var geometry = new THREE.BoxGeometry(9, 5, 1, 9, 5, 1);
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    obj.add(mesh);
}

function createWheel(obj, x, y, z) {
    'use strict';
    var wheel = new THREE.Group();
    createWheelTorus(wheel, 0 , 0, 0);
    createWheelCylinder(wheel, 0, 0, 0);
    wheel.position.set(x, y, z);
    obj.add(wheel);
    return wheel;
}

function createWheelTorus(obj, x, y, z) {
	'use strict';

    var material = new THREE.MeshBasicMaterial({color: '#4b3832', wireframe: true});
    var geometry = new THREE.TorusGeometry(3.25, 0.75, 5, 50, 6.3);
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    obj.add(mesh);
}

function createWheelCylinder(obj, x, y, z) {
	'use strict';
	var angle = 0;
	var i;
	for (i = 0; i< 4; i++){	
		var material = new THREE.MeshBasicMaterial({color: '#4b3832', wireframe: true});
   		var geometry = new THREE.CylinderGeometry(0.25, 0.25, 6.5, 20, 20);
    	var mesh = new THREE.Mesh(geometry, material);
    	mesh.rotation.set(0, 0, angle);
    	angle += Math.PI/4;
    	mesh.position.set(x, y, z);
    	obj.add(mesh);
    }
}


/*
 * Tube
 */

 function createCannonTube(obj, x, y, z) {
    'use strict';

    var tube = new THREE.Group();

    createTube(tube, 0, 0, 0); // Tube referencial origin
    createExit(tube, 10, 0, 0);

    tube.position.set(x, y, z);

    obj.add(tube);

    return tube;
}

function createTube(obj, x, y, z) {
    'use strict';

    var material = new THREE.MeshBasicMaterial({color: '#4e635a', wireframe: true});
    var geometry = new THREE.CylinderGeometry(3, 3, 20, 30, 20);
    var mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.set(-Math.PI/2, 0, -Math.PI/2);
    mesh.position.set(x, y, z);
    obj.add(mesh);
}

function createExit(obj, x, y, z) {
    'use strict';

    var material = new THREE.MeshBasicMaterial({color: '#854442', wireframe: true});
    var geometry = new THREE.TorusGeometry(3, 0.35, 8, 50);
    var mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.set(0, -Math.PI/2, 0);
    mesh.position.set(x, y, z);
    obj.add(mesh);
}


/*
 * Hat
 */

 function createCannonHat(obj, x, y, z) {
    'use strict';

    var hat = new THREE.Group();

    createHat(hat, 0, 0, 0); // hat referencial origin
    createHatBall(hat, -3.5, 0, 0);

    hat.position.set(x, y, z);

    obj.add(hat);

    return hat;
}

function createHat(obj, x, y, z) {
    'use strict';

    var material = new THREE.MeshBasicMaterial({color: '#854442', wireframe: true});
    var geometry = new THREE.SphereGeometry(3, 5, 5, 0, Math.PI, 0);
    var mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.set(0, -Math.PI/2, 0);
    mesh.position.set(x, y, z);
    obj.add(mesh);
}

function createHatBall(obj, x, y, z) {
    'use strict';

    var material = new THREE.MeshBasicMaterial({color: '#525b5c', wireframe: true});
    var geometry = new THREE.SphereGeometry(0.5, 5, 5, 0, 6.3, 0, 3.1);
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    obj.add(mesh);
}
