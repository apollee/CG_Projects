class Ball extends THREE.Object3D {
    constructor(x, y, z) {
        'use strict';

        super();

        var geometry = new THREE.SphereGeometry(10, 16, 16);
        var texture = new THREE.TextureLoader().load('textures/800px-Mona_Lisa,_by_Leonardo_da_Vinci,_from_C2RMF_retouched.jpg');
        
        var materials = [new THREE.MeshBasicMaterial({map: texture}),
                         new THREE.MeshPhongMaterial({map: texture, shininess: 60})
                        ];
        var mesh = new smartMesh(geometry, materials);

        this.add(mesh);

        this.world = new THREE.Group();
        this.position.set(x, y, z);

        this.startPos = {x:x, y:y ,z: z}

        this.world.add(this);

        scene.add(this.world);

        this.speed = 0;
        this.acelarationPos = false; 
        this.acelaration = 0;
    }

    dualSpin() {
        this.updateSpeed();
        this.world.rotateY( this.speed * time.getTimeDiff()/500 );
        this.rotateY( this.speed * time.getTimeDiff()/500 )
    }

    updateSpeed() {
        if (time.isFreezed()) return;

        this.speed += this.acelaration;

        if (this.speed < 0) {
            this.speed = 0;
            this.acelaration = 0;
        }
        else if ( this.speed > 1 ) {
            this.speed = 1;
            this.acelaration = 0;
        }
    }

    toggleAcelaration() {
        this.acelarationPos = !this.acelarationPos;

        if (this.acelarationPos)
            this.acelaration = 0.01;
        else
            this.acelaration = -0.01;

    }

    reset() {
        this.rotateY( this.rotation.x == 0 ? -this.rotation.y : Math.PI + this.rotation.y );
        this.world.rotateY( this.world.rotation.x == 0 ? -this.world.rotation.y : Math.PI + this.world.rotation.y );

        this.speed = 0;
        this.acelarationPos = false; 
        this.acelaration = 0;
    }
}
