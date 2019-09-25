function createRobotCar(x, y, z) {
	'use strict';

	var car = new THREE.Object3D();

	createBase(car, 0, 0, 0);
	createWheels(car, 13, -3, 3);
	createWheels(car, -13, -3,3);
	createWheels(car, 13, -3,-3);
	createWheels(car, -13, -3,-3);
	createCalote(car, 0, 1, 0)

	car.position.set(x, y, z);
	scene.add(car);
}

function createBase(obj, x, y, z) {
	'use strict';

	var material = new THREE.MeshBasicMaterial({color: '#26e856', wireframe: true});
	var geometry = new THREE.BoxGeometry(30, 2, 10);
	var mesh = new THREE.Mesh(geometry, material);
	mesh.position.set(x, y, z);
	obj.add(mesh);
}

function createWheels(obj, x, y, z) {
	'use strict';

	var material = new THREE.MeshBasicMaterial({color: '#26e856', wireframe: true});
	var geometry = new THREE.SphereGeometry(2, 32, 32);
	var mesh = new THREE.Mesh(geometry, material);
	mesh.position.set(x, y, z);
	obj.add(mesh);
}

function createCalote(obj, x, y, z) {
	'use strict';

	var material = new THREE.MeshBasicMaterial({color: '#26e856', wireframe: true});
	var geometry = new THREE.SphereGeometry(3, 16, 16, 0, Math.PI, 0);
	var mesh = new THREE.Mesh(geometry, material);
	mesh.position.set(x, y, z);
	mesh.rotation.set(-(Math.PI/2), 0, Math.PI/2);
	obj.add(mesh);

}