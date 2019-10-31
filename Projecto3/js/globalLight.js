class globalLight extends THREE.DirectionalLight {

    constructor() {
        super();

        scene.add(this.target);

        this.target = scene;

        this.position.set(100, 100, 100);

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