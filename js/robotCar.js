function createRobotCar(obj, x, y, z) {
	'use strict';

	var car = new THREE.Object3D();

	createBase(car, 0, 0, 0);
	createCarWheels(car, 13, -3, 3);
	createCarWheels(car, -13, -3,3);
	createCarWheels(car, 13, -3,-3);
	createCarWheels(car, -13, -3,-3);
	createCalote(car, 0, 1, 0)

	car.position.set(x, y, z);
	
    obj.add(car);
}

function createBase(obj, x, y, z) {
	'use strict';

	var material = new THREE.MeshBasicMaterial({color: '#eb6841', wireframe: true});
	var geometry = new THREE.BoxGeometry(30, 2, 10, 30, 2, 10);
	var mesh = new THREE.Mesh(geometry, material);
	mesh.position.set(x, y, z);
	obj.add(mesh);
}

function createCarWheels(obj, x, y, z) {
	'use strict';

	var material = new THREE.MeshBasicMaterial({color: '#1e2c3e', wireframe: true});
	var geometry = new THREE.SphereGeometry(2, 8, 8);
	var mesh = new THREE.Mesh(geometry, material);
	mesh.position.set(x, y, z);
	obj.add(mesh);
}

function createCalote(obj, x, y, z) {
	'use strict';

	var material = new THREE.MeshBasicMaterial({color: '#00a0b0', wireframe: true});
	var geometry = new THREE.SphereGeometry(4, 10, 10, 0, Math.PI, 0);
	var mesh = new THREE.Mesh(geometry, material);
	mesh.position.set(x, y, z);
	mesh.rotation.set(-(Math.PI/2), 0, Math.PI/2);
	obj.add(mesh);

}