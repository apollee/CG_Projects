class Dice extends THREE.Object3D {
    constructor(x ,y, z) {
        super();

        var geometry = new THREE.BoxBufferGeometry(15, 15, 15, 12, 12, 12);
        var texture = new THREE.TextureLoader().load('textures/1.jpg');
        
        var materials = [new THREE.MeshBasicMaterial({map: texture}),
                         new THREE.MeshPhongMaterial({map: texture})
                        ];
        var mesh = new smartMesh(geometry, materials);

        mesh.rotateY(Math.PI/4);

        var rotaxemantain = new THREE.Group();

        rotaxemantain.add(mesh);

        rotaxemantain.rotateX( 0.95451 );
        
        this.add(rotaxemantain);

        this.position.set(0, y, 0);
        
        scene.add(this);
    }

    spin() {
        this.rotateY( time.getTimeDiff()/500 );
    }

    reset() {
        this.rotateY( this.rotation.x == 0 ? -this.rotation.y : Math.PI + this.rotation.y );
    }

}