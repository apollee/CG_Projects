var smartMeshes = []
var allMaterials = []

var wireframeOn = false;
var illuminationOn = true;
var needToToggleWireframe = false;
var needToToggleIlumination = false;

class smartMesh extends THREE.Mesh {
    constructor(geometry, materials) {
        'use strict'

        super(geometry, materials[1]);

        this.allMaterials = materials;
        this.on = true;

        allMaterials = allMaterials.concat(materials);

        smartMeshes.push(this);
    }

    turnOnOffIlumination() {
        if (this.on)
            this.material = this.allMaterials[0]
        else
            this.material = this.allMaterials[1]

        this.on = !this.on
    }

}

function toggleIlumination() {
    illuminationOn = !illuminationOn;

    smartMeshes.forEach( smesh => { smesh.turnOnOffIlumination(); } );
}

function toggleWireframe() {
    wireframeOn = !wireframeOn;

    allMaterials.forEach( material => { material.wireframe = !material.wireframe; } );
}

function resetMeshes() {
    if (!illuminationOn) toggleIlumination();
    if (wireframeOn) toggleWireframe();
}