class cannonHandler {

    constructor(scene) {
        this.cannons = [ new Cannon(-30, 0, -25, time),
                         new Cannon(-30, 0,   0, time),
                         new Cannon(-30, 0,  25, time) ];

        this.cannons.forEach( cannon => { scene.add(cannon) } );

        this.selected = 0;
        this.select(0);
    }

    select(index) {
        this.cannons[this.selected].unSelect();
        this.cannons[index].select();
        this.selected = index;
    }

    getSelected() {
        return this.cannons[this.selected];
    }

    selectedRightMovement() {
        this.getSelected().rightMovement();
    }

    selectedLeftMovement() {
        this.getSelected().leftMovement();
    }

    selectedStopRightMovement() {
        this.getSelected().stopRightMovement()
    }
    
    selectedStopLeftMovement() {
        this.getSelected().stopLeftMovement();
    }

    selectedShoot() {
        this.getSelected().shoot();
    }

    update () {
        this.cannons.forEach( cannon => { cannon.update(); } );
    }
}
