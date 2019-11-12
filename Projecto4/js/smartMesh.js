var smartMeshes = []

class smartMesh extends THREE.Mesh {
    constructor(geometry, materials) {
        'use strict'

        super(geometry, materials[0]);

        this.allMaterials = materials;
        this.on = false;
        this.shadeMaterial_i = 0;

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