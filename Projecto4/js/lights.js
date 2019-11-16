class globalLight extends THREE.DirectionalLight {

    constructor() {
        super();

        scene.add(this.target);

        this.target = scene;
        this.position.set(10, 50, 70);
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

    reset() {
        if (!this.on) this.onOffSwitch();
    }
}

class pointLight extends THREE.PointLight {

    constructor() {
        super();

        this.position.set(30, 50, 0);
        this.on = true

        scene.add(this);
    }

    onOffSwitch() {
        if (this.on)
            scene.remove(this);
        else
            scene.add(this);

        this.on = !this.on
    }

    reset() {
        if (!this.on) this.onOffSwitch();
    }
}

