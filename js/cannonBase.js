function createCannonBase(obj, x, y, z){
    'use strict';

    var base = new THREE.Group();

    createBottomBase(base, -3, 0, 0); // base referencial origin
    createWallBase(base, -3, 2, 7);
    createWallBase(base, -3, 2, -7);
    createWheel(base, -4, -4, 8.5);
    createWheel(base, -4, -4, -8.5);

    base.position.set(x, y, z);

    obj.add(base);

    return base;
}

function createBottomBase(obj, x, y, z) {
    'use strict';

    var material = new THREE.MeshBasicMaterial({color: '#be9b7b', wireframe: true});
    var geometry = new THREE.BoxGeometry(18, 6, 12, 1, 1, 1);
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    obj.add(mesh);

}

function createWallBase(obj, x, y, z) {
    'use strict';

    var material = new THREE.MeshBasicMaterial({color: '#be9b7b', wireframe: true});
    var geometry = new THREE.BoxGeometry(18, 10, 2, 1, 1, 1);
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
    var geometry = new THREE.TorusGeometry(6.5, 1.5, 10, 50, 6.3);
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
   		var geometry = new THREE.CylinderGeometry(0.5, 0.5, 13, 20, 20);
    	var mesh = new THREE.Mesh(geometry, material);
    	mesh.rotation.set(0, 0, angle);
    	angle += Math.PI/4;
    	mesh.position.set(x, y, z);
    	obj.add(mesh);
    }
}