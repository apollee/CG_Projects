class Dice extends THREE.Object3D {
    constructor(x ,y, z) {
        super();

        var preDice = makeDice();

        preDice.rotateY(Math.PI/4);

        var rotaxemantain = new THREE.Group();

        rotaxemantain.add(preDice);

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

function makeDice() {
        var preDice = new THREE.Object3D();

        var faces = [];
        for (var i in [1,2,3,4,5,6]) {
            i++;
            var geometry = new THREE.PlaneGeometry(15, 15, 12, 12);
            var texture = new THREE.TextureLoader().load('textures/b'+i+'.jpg');
            var bumpMap = new THREE.TextureLoader().load('textures/b'+i+'.jpg');
            
            var materials = [new THREE.MeshBasicMaterial({map: texture}),
                             new THREE.MeshPhongMaterial({map: texture, bumpMap: bumpMap,})
                            ];
            face = new smartMesh(geometry, materials);

            faces.push(face);
        }

        faces[0].position.z = 7.5;
        faces[1].position.z = -7.5;
        faces[1].rotateY(Math.PI);

        faces[2].rotateX(3*Math.PI/2);
        faces[2].position.y =  7.5;

        faces[3].rotateX(Math.PI/2);
        faces[3].position.y = -7.5;

        faces[4].rotateY(Math.PI/2);
        faces[4].position.x =  7.5;

        faces[5].rotateY(3*Math.PI/2);
        faces[5].position.x = -7.5;

        for (var face in faces) {
            scene.add(faces[face]);
            preDice.add(faces[face]);
        }

        return preDice;
}
