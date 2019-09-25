function createRobotCar(x, y, z) {
	'use strict';

	var car = new THREE.Object3D();

	createBase(car, 0, 0, 0);
	createCarWheels(car, 13, -3, 3);
	createCarWheels(car, -13, -3,3);
	createCarWheels(car, 13, -3,-3);
	createCarWheels(car, -13, -3,-3);
	createCalote(car, 0, 1, 0)

	car.position.set(x, y, z);
	scene.add(car);
}

function createBase(obj, x, y, z) {
	'use strict';

	var material = new THREE.MeshBasicMaterial({color: '#aae856', wireframe: true});
	var geometry = new THREE.BoxGeometry(30, 2, 10, 30, 2, 10);
	var mesh = new THREE.Mesh(geometry, material);
	mesh.position.set(x, y, z);
	obj.add(mesh);
}

function createCarWheels(obj, x, y, z) {
	'use strict';

	var material = new THREE.MeshBasicMaterial({color: '#26e89a', wireframe: true});
	var geometry = new THREE.SphereGeometry(2, 8, 8);
	var mesh = new THREE.Mesh(geometry, material);
	mesh.position.set(x, y, z);
	obj.add(mesh);
}

function createCalote(obj, x, y, z) {
	'use strict';

	var material = new THREE.MeshBasicMaterial({color: '#2651a6', wireframe: true});
	var geometry = new THREE.SphereGeometry(3, 8, 8, 0, Math.PI, 0);
	var mesh = new THREE.Mesh(geometry, material);
	mesh.position.set(x, y, z);
	mesh.rotation.set(-(Math.PI/2), 0, Math.PI/2);
	obj.add(mesh);

}