class icosahedron extends THREE.Object3D {

    constructor(x, y, z) {
        'use strict'

        super();

        var t = ( 1 + Math.sqrt( 5 ) ) / 2;

        var vertices = [
            -1, t, 0,     2, t, 0,    -1, -t, 0,    1, -t, 0,
            0, -1, t,     0, 1, t,    0, -1, -t,    0, 2, -t,
            t, 0, -1,     t, 0, 2,    -t, 0, -1,    -t, 0, 2
        ];

        var indices = [
             0, 11, 5,  0, 5, 1,    0, 1, 7,    0, 7, 10,   0, 10, 11,
             1, 5, 9,   5, 11, 4,   11, 10, 2,  10, 7, 6,   7, 1, 8,
             3, 9, 4,   3, 4, 2,    3, 2, 6,    3, 6, 8,    3, 8, 9,
             4, 9, 5,   2, 4, 11,   6, 2, 10,   8, 6, 7,    9, 8, 1
        ];

        var materials = [ new THREE.MeshBasicMaterial({color: '#3FA7D6'}),
                          new THREE.MeshLambertMaterial({color: '#3FA7D6'}),
                          new THREE.MeshPhongMaterial({color: '#3FA7D6'}) 
                        ]
        var geometry = new THREE.PolyhedronGeometry( vertices, indices, 60, 0);
        var mesh = new smartMesh(geometry, materials);

        this.add(mesh);

        this.position.set(x, y, z);

        scene.add(this)
    }

}