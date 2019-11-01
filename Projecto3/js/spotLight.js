class spotlightHandler {
    constructor() {
        this.lights = []

        this.lights.push(new spotlight(-350, 400, 100, Math.PI/3, frame));
        this.lights.push(new spotlight(300, 250, 100, -Math.PI/2, ico));
        this.lights.push(new spotlight(-150, 400, 100, Math.PI*2, frame));
        this.lights.push(new spotlight(100, 400, 100, 0, ico));
    }

    onOffSwitch(index) {
        this.lights[index].onOffSwitch();
    }
}

class spotlight extends THREE.SpotLight {

    constructor(x, y, z, rotZ, target) {
        super();

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

    illuminationSwitch() {
        this.castShadow = !this.castShadow
    }

}

function createLightBulb(x, y, z, rotZ) {
    'use strict'

    var bulb = new THREE.Object3D();

    var materials = [ new THREE.MeshBasicMaterial({color: '#555626'}),
                      new THREE.MeshLambertMaterial({color: '#555626'}),
                      new THREE.MeshPhongMaterial({color: '#555626'}) 
                    ]
    var geometry = new THREE.ConeGeometry(20, 35, 32, 1, true);
    var cone = new smartMesh(geometry, materials);

    var materials = [ new THREE.MeshBasicMaterial({color: '#132456'}),
                      new THREE.MeshLambertMaterial({color: '#132456'}),
                      new THREE.MeshPhongMaterial({color: '#132456'}) 
                    ]
    geometry = new THREE.SphereGeometry(20, 32, 32);
    var ball = new smartMesh(geometry, materials);

    cone.position.y = 25;

    bulb.add(cone)
    bulb.add(ball)

    bulb.position.set(x, y, z);
    bulb.rotateZ(rotZ);

    scene.add(bulb);

    return bulb;
}