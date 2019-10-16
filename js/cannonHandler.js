class cannonHandler {

    constructor() {
        this.cannons = [ new Cannon(-50, 0, -30, 0),
                         new Cannon(-50, 0,   0, 1),
                         new Cannon(-50, 0,  30, 2) ];

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
