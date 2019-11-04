function createPaintingFrame(x, y, z) {
    'use strict'

    var frame = new THREE.Group();

    createFrameWood(frame, 10, 150, 110, 0, 1);
    createFrameWood(frame, 210, 10, 0, -70, 1);
    createFrameWood(frame, 10, 150, -110, 0, 1);
    createFrameWood(frame, 210, 10, 0, 70, 1);
    createPainting(frame);
    createStripes(frame);
    createCircles(frame);

    frame.position.set(x, y, z);
    scene.add(frame);

    return frame
}

function createFrameWood(obj, width, height, x, y, z) {
    'use strict'

    var materials = [ new THREE.MeshBasicMaterial({color: '#cd853f'}),
                      new THREE.MeshLambertMaterial({color: '#cd853f'}),
                      new THREE.MeshPhongMaterial({color: '#cd853f'}) 
                    ]
    var geometry = new THREE.BoxGeometry(width, height, 2, width/2, height/2);
    var mesh = new smartMesh(geometry, materials);

    mesh.position.set(x,y,z);
    obj.add(mesh);
}

function createPainting(frame) {
    'use strict'

    var materials = [ new THREE.MeshBasicMaterial({color: '#000000'}),
                      new THREE.MeshLambertMaterial({color: '#000000'}),
                      new THREE.MeshPhongMaterial({color: '#000000'}) 
                    ]
    var geometry = new THREE.PlaneGeometry(210, 140, 100, 70);
    var mesh = new smartMesh(geometry, materials);

    mesh.position.z = 1;

    frame.add(mesh);

}

function createStripes(frame) {
    var y = -56;
    var x = -96;

    for (var i = 0; i < 8; i++, y += 16)
        horizontalStripe(frame, 0, y, 1);

    for (var i = 0; i < 13; i++, x += 16)
        verticalStripe(frame, x, 0, 1);
}

function createCircles(frame) {
    var y = -56;

    for (var i = 0; i < 8; i++, y += 16) {
        var x = -96;
        for (var j = 0; j < 13; j++, x += 16)
            ilusionCircle(frame, x, y, 1);
    }
}


function horizontalStripe(frame, x, y, z) {
    'use strict'

    var materials = [ new THREE.MeshBasicMaterial({color: '#d1c9c9'}),
                      new THREE.MeshLambertMaterial({color: '#d1c9c9'}),
                      new THREE.MeshPhongMaterial({color: '#d1c9c9'}) 
                    ]
    var geometry = new THREE.BoxGeometry(210, 4, 2, 100, 2);
    var mesh = new smartMesh(geometry, materials);

    mesh.position.set(x,y,z);
    frame.add(mesh);
}

function verticalStripe(frame, x, y, z) {
    'use strict'

    var materials = [ new THREE.MeshBasicMaterial({color: '#d1c9c9'}),
                      new THREE.MeshLambertMaterial({color: '#d1c9c9'}),
                      new THREE.MeshPhongMaterial({color: '#d1c9c9'}) 
                    ]
    var geometry = new THREE.BoxGeometry(4, 130, 2, 2, 65);
    var mesh = new smartMesh(geometry, materials);

    mesh.position.set(x,y,z);
    frame.add(mesh);
}

function ilusionCircle(frame, x, y, z) {
    'use strict'

    var materials = [ new THREE.MeshBasicMaterial({color: '#ffffff'}),
                      new THREE.MeshLambertMaterial({color: '#ffffff'}),
                      new THREE.MeshPhongMaterial({color: '#ffffff'}) 
                    ]
    var geometry = new THREE.CylinderGeometry(2.8284, 2.8284, 2, 20);
    var mesh = new smartMesh(geometry, materials);

    mesh.rotateX(Math.PI/2);
    mesh.position.set(x,y,z);
    frame.add(mesh);
}