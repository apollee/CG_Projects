class cannonCamera extends THREE.OrthographicCamera {
    
    constructor(){
        var width = window.innerWidth / aspectratio;
        var height = window.innerHeight / aspectratio;
        super(-width, width, height, -height, 1, 2000 );
        this.sideView();

    }

    topView(){
        this.position.set(0, window.innerHeight/2, 0);
        this.lookAt();
    }

    sideView() {
        var width = window.innerWidth;

        this.position.set( width/2, width/2, width/2);
        this.lookAt();
    }

    lookAt(){
        super.lookAt(scene.position);
    }

}