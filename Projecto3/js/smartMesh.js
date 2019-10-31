class smartMesh extends THREE.Mesh {
    constructor(geometry, materials) {
        'use strict'

        super(geometry, materials[1]);

        this.allMaterials = materials;
    }

    changeToMaterial(index) {
        if (index >= this.allMaterials.length )
            index = 0;

        this.material = this.allMaterials[index];
    }
}