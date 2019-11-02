var smartMeshes = []

class smartMesh extends THREE.Mesh {
    constructor(geometry, materials) {
        'use strict'

        super(geometry, materials[1]);

        this.allMaterials = materials;
        this.on = true;
        this.shadeMaterial_i = 1;

        smartMeshes.push(this);
    }

    changeShadingType() {
        this.shadeMaterial_i = this.shadeMaterial_i%2 + 1;

        if (this.on) this.material = this.allMaterials[this.shadeMaterial_i];4
    }

    turnOnOffIlumination() {
        if (this.on)
            this.material = this.allMaterials[0]
        else
            this.material = this.allMaterials[this.shadeMaterial_i]

        this.on = !this.on
    }
}