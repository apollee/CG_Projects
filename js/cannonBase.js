function createCannonBase(obj, x, y, z){
    'use strict';

    var base = new THREE.Group();

    createBottomBase(base, -1.5, 0, 0); // base referencial origin
    createWallBase(base, -1.5, 1, 3.5);
    createWallBase(base, -1.5, 1, -3.5);
    createWheel(base, -2, -2, 4.25);
    createWheel(base, -2, -2, -4.25);

    base.position.set(x, y, z);

    obj.add(base);

    return base;
}

function createBottomBase(obj, x, y, z) {
    'use strict';

    var material = new THREE.MeshBasicMaterial({color: '#be9b7b', wireframe: true});
    var geometry = new THREE.BoxGeometry(9, 3, 6, 1, 1, 1);
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    obj.add(mesh);

}

function createWallBase(obj, x, y, z) {
    'use strict';

    var material = new THREE.MeshBasicMaterial({color: '#be9b7b', wireframe: true});
    var geometry = new THREE.BoxGeometry(9, 5, 1, 1, 1, 1);
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

function createWheelTorus(obj, x, y, z){
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