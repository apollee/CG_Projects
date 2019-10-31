class smartMesh extends THREE.Mesh {
    constructor(geometry, materials) {
        'use strict'

        super(geometry, materials[1]);

        this.allMaterials = materials;
        this.on = true;
        this.shadeMaterial_i = 1;
    }

    changeShadingType() {
        if (this.shadeMaterial_i == 1) {
            this.shadeMaterial_i = 2
            this.material = this.allMaterials[2]
        }
        else {
            this.shadeMaterial_i = 1
            this.material = this.allMaterials[1]
        }
    }

    turnOnOffIlumination() {
        if (this.on)
            this.material = this.allMaterials[0]
        else
            this.material = this.allMaterials[this.shadeMaterial_i]

        this.on = !this.on
    }
}