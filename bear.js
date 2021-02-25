'use strict';

window.addEventListener('load', function() {

var CONTAINER_ID = 'v3d-container';

var app = new v3d.App(CONTAINER_ID, null,
        new v3d.SimplePreloader({ container: CONTAINER_ID }));

var url = 'bear.gltf';

app.loadScene(url, function() {
    app.enableControls();
    app.run();
    runCode();
});

function runCode() {
    // add your code here, e.g. console.log('Hello, World!');

}

});
