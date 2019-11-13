class Ball extends THREE.Object3D {
    constructor(x, y, z) {
        'use strict';

        super();

        var geometry = new THREE.SphereGeometry(10, 32, 32);
        var texture = new THREE.TextureLoader().load('textures/800px-Mona_Lisa,_by_Leonardo_da_Vinci,_from_C2RMF_retouched.jpg');
        
        var materials = [new THREE.MeshBasicMaterial({map: texture}),
                         new THREE.MeshPhongMaterial({map: texture})
                        ];
        var mesh = new smartMesh(geometry, materials);

        this.add(mesh);

        this.world = new THREE.Group();
        this.position.set(x, y, z);

        this.world.add(this);

        scene.add(this.world);
    }

}
