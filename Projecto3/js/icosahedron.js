class icosahedron extends THREE.Object3D {

    constructor(x, y, z) {
        'use strict'

        super();

        var material = new THREE.MeshLambertMaterial({color: '#11aa33'});
        var geometry = new THREE.IcosahedronGeometry(60);
        var mesh = new THREE.Mesh(geometry, material);

        this.add(mesh);

        this.position.set(x, y, z);

        scene.add(this)
    }

}