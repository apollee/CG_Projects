function createAllVertex(x, y, z){

	var geometry = new THREE.Geometry();
	
	geometry.vertices.push(
		new THREE.Vector3(  20 * numGold, 0,  20), //v0
		new THREE.Vector3(  20 * numGold, 0, -20), //v1
		new THREE.Vector3( -20 * numGold, 0, -20), //v2
		new THREE.Vector3( -20 * numGold, 0,  20), //v3
		new THREE.Vector3(  20,  20 * numGold, 0), //v4
		new THREE.Vector3(  20, -20 * numGold, 0), //v5
		new THREE.Vector3( -20,  20 * numGold, 0), //v6
		new THREE.Vector3( -20, -20 * numGold, 0), //v7
		new THREE.Vector3( 0,  20,  20 * numGold), //v8
		new THREE.Vector3( 0, -20,  20 * numGold), //v9
		new THREE.Vector3( 0, -20, -20 * numGold), //v10
		new THREE.Vector3( 0,  20, -20 * numGold), //v11
		
	);

	geometry.faces.push( 
		new THREE.Face3(  0, 3, 8),
		new THREE.Face3(  0, 9, 3),
		new THREE.Face3(  5,  9, 0),
		new THREE.Face3(  4,  5, 0),
		new THREE.Face3(  4,  0, 8),
		/*new THREE.Face3(  8,  11,4),
		new THREE.Face3(  8, 6, 11),
		new THREE.Face3(  3, 6, 8),
		new THREE.Face3(  3, 7, 6),
		new THREE.Face3(  9,  7, 3 ),
		new THREE.Face3(  9, 10 , 7 ),
		new THREE.Face3(  5,  10, 9 ),
		new THREE.Face3(  5, 1 ,  10 ),
		new THREE.Face3(  5, 4 ,1  ),
		new THREE.Face3(  4, 11 ,1  ),
		new THREE.Face3(  10, 1, 2  ),
		new THREE.Face3(  1,11 , 2 ),
		new THREE.Face3(  11,  6, 2),
		new THREE.Face3(  6, 7 , 2 ),
		new THREE.Face3(  7, 10 , 2 ),*/
		
	);

	var material = new THREE.MeshBasicMaterial( { color : 0xffffff, wireframe: true} );

	var mesh = new THREE.Mesh( geometry, material);
	mesh.drawMode = THREE.TriangleDrawMode;
	mesh.position.set(x, y, z);

	scene.add(mesh);

	return [];
}

function createVertex(obj, x, y, z){
	'use strict';

    var material = new THREE.MeshBasicMaterial({color: '#be9b7b4', wireframe: true});
    var geometry = new THREE.SphereGeometry(4, 32, 32);
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    scene.add(mesh);

}