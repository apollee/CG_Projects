var smartMeshes = []
var allMaterials = []

var toggleWireframe = false;
var toggleIlumination = false;

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