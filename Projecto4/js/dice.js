class Dice extends THREE.Object3D {
    constructor(x ,y, z) {
        super();

        var geometry = new THREE.BoxBufferGeometry(15, 15, 15, 15, 15, 15);
        var texture = new THREE.TextureLoader().load('textures/1.jpg');
        
        var materials = [new THREE.MeshBasicMaterial({map: texture}),
                         new THREE.MeshPhongMaterial({map: texture})
                        ];
        var mesh = new smartMesh(geometry, materials);

        mesh.rotateX(Math.PI/4);
        mesh.rotateY(Math.PI/4);
        
        this.add(mesh);

        this.position.set(x, y, z);
        
        scene.add(this);
    }
}