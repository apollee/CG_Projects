class spotlightHandler {
    constructor() {
        this.lights = []

        this.lights.push(new spotlight(-250, 400, 100,    Math.PI*2, frame));
        this.lights.push(new spotlight( -60, 400, 100,    Math.PI*2, frame));
        this.lights.push(new spotlight( 150, 250, 100,            0,  ico));
        this.lights.push(new spotlight( 350, 250, 100, -Math.PI/2.7,  ico));
    }

    onOffSwitch(index) {
        this.lights[index].onOffSwitch();
    }
}

class spotlight extends THREE.SpotLight {

    constructor(x, y, z, rotZ, target) {
        super(0xffffff, 1, 750, Math.PI/6, 1);

        scene.add(this.target);

        this.target = target;
        this.position.set(x, y, z);

        this.bulb = createLightBulb(x, y, z, rotZ);

        this.on = true;
        scene.add(this);
    }

    onOffSwitch() {
        if (this.on)
            scene.remove(this);
        else
            scene.add(this);

        this.on = !this.on
    }
}

function createLightBulb(x, y, z, rotZ) {
    'use strict'

    var bulb = new THREE.Object3D();

    var materials = [ new THREE.MeshBasicMaterial({color: '#7A7977'}),
                      new THREE.MeshLambertMaterial({color: '#7A7977'}),
                      new THREE.MeshPhongMaterial({color: '#7A7977'}) 
                    ]
    var geometry = new THREE.ConeGeometry(10, 35, 32, 1, true);
    var cone = new smartMesh(geometry, materials);

    var materials = [ new THREE.MeshBasicMaterial({color: '#E2D6AC'}),
                      new THREE.MeshLambertMaterial({color: '#E2D6AC'}),
                      new THREE.MeshPhongMaterial({color: '#E2D6AC'}) 
                    ]
    geometry = new THREE.SphereGeometry(13, 32, 32);
    var ball = new smartMesh(geometry, materials);

    cone.position.y = 25;

    bulb.add(cone)
    bulb.add(ball)

    bulb.position.set(x, y, z);
    bulb.rotateZ(rotZ);

    scene.add(bulb);

    return bulb;
}