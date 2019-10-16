/*
 * CannonBase
 */

function createCannonBase(obj, x, y, z, n) {
    'use strict';

    var base = new THREE.Group();

    createCannonBottomBase(base, -1.5, 0, 0, n); // base referencial origin
    createCannonSideBase(base, -1.5, 1, 3.5, n);
    createCannonSideBase(base, -1.5, 1, -3.5, n);
    createCannonWheel(base, -2, -2, 4.25, n);
    createCannonWheel(base, -2, -2, -4.25, n);

    base.position.set(x, y, z);

    obj.add(base);

    base.name = "cannonBase" + n;

    return base;
}

function createCannonBottomBase(obj, x, y, z, n) {
    'use strict';

    var material = new THREE.MeshBasicMaterial({color: '#be9b7b', wireframe: true});
    var geometry = new THREE.BoxGeometry(9, 3, 6, 9, 3, 6);
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    obj.add(mesh);

    mesh.name = "cannonBottomBase" + n;
}

function createCannonSideBase(obj, x, y, z, n) {
    'use strict';

    var material = new THREE.MeshBasicMaterial({color: '#be9b7b', wireframe: true});
    var geometry = new THREE.BoxGeometry(9, 5, 1, 9, 5, 1);
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    obj.add(mesh);

    mesh.name = "cannonSideBase" + n;
}

function createCannonWheel(obj, x, y, z, n) {
    'use strict';

    var wheel = new THREE.Group();
    createCannonWheelTorus(wheel, 0 , 0, 0, n);
    createCannonWheelCylinder(wheel, 0, 0, 0, n);
    wheel.position.set(x, y, z);
    obj.add(wheel);

    wheel.name = "cannonWheel" + n;
}

function createCannonWheelTorus(obj, x, y, z, n) {
	'use strict';

    var material = new THREE.MeshBasicMaterial({color: '#4b3832', wireframe: true});
    var geometry = new THREE.TorusGeometry(3.25, 0.75, 5, 50, 6.3);
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    obj.add(mesh);

    mesh.name = "cannonWhellTorus" + n;
}

function createCannonWheelCylinder(obj, x, y, z, n) {
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

        mesh.name = "cannonWheelCylinder" + n;
    }
}


/*
 * Tube
 */

 function createCannonTube(obj, x, y, z, n) {
    'use strict';

    var tube = new THREE.Group();

    createCannonTubeCyl(tube, 0, 0, 0, n); // Tube referencial origin
    createCannonTubeExit(tube, 10, 0, 0, n);

    tube.position.set(x, y, z);

    obj.add(tube);

    tube.name = "cannonTube" + n;

    return tube;
}

function createCannonTubeCyl(obj, x, y, z, n) {
    'use strict';

    var material = new THREE.MeshBasicMaterial({color: '#4e635a', wireframe: true});
    var geometry = new THREE.CylinderGeometry(3, 3, 20, 30, 20);
    var mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.set(-Math.PI/2, 0, -Math.PI/2);
    mesh.position.set(x, y, z);
    obj.add(mesh);

    mesh.name = "cannonTubeCyl" + n;
}

function createCannonTubeExit(obj, x, y, z, n) {
    'use strict';

    var material = new THREE.MeshBasicMaterial({color: '#854442', wireframe: true});
    var geometry = new THREE.TorusGeometry(3, 0.35, 8, 50);
    var mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.set(0, -Math.PI/2, 0);
    mesh.position.set(x, y, z);
    obj.add(mesh);

    mesh.name = "cannonTubeExit" + n;
}


/*
 * Hat
 */

 function createCannonHat(obj, x, y, z, n) {
    'use strict';

    var hat = new THREE.Group();

    createCannonHatBase(hat, 0, 0, 0, n); // hat referencial origin
    createCannonHatBall(hat, -3.5, 0, 0, n);

    hat.position.set(x, y, z);

    obj.add(hat);

    hat.name = "cannonHat" + n;

    return hat;
}

function createCannonHatBase(obj, x, y, z, n) {
    'use strict';

    var material = new THREE.MeshBasicMaterial({color: '#854442', wireframe: true});
    var geometry = new THREE.SphereGeometry(3, 5, 5, 0, Math.PI, 0);
    var mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.set(0, -Math.PI/2, 0);
    mesh.position.set(x, y, z);
    obj.add(mesh);

    mesh.name = "cannonHatBase" + n;
}

function createCannonHatBall(obj, x, y, z, n) {
    'use strict';

    var material = new THREE.MeshBasicMaterial({color: '#525b5c', wireframe: true});
    var geometry = new THREE.SphereGeometry(0.5, 5, 5, 0, 6.3, 0, 3.1);
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    obj.add(mesh);

    mesh.name = "cannonHatBall" + n;
}
