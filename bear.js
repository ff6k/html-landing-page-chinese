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



// $(document).ready(function() {
 
// 	$.urlParam = function(name){
// 		var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
// 		if (results==null){
// 		   return null;
// 		}
// 		else{
// 		   return results[1] || 0;
// 		}
// 	}
 
// 	function loadJS(file) {
// 		var jsElm = document.createElement("script");
// 		jsElm.type = "application/javascript";
// 		jsElm.src = file;
 
// 		$("body").prepend(jsElm);
// 	}
 
// 	if ($.urlParam("lang") == "en") {
// 		loadJS("js/lang.en.js");
// 		$("#lang-en").css("font-weight", "bolder");
// 	} else if ($.urlParam("lang") == "hr") {
// 		loadJS("js/lang.hr.js");
// 		$("#lang-hr").css("font-weight", "bolder");
// 	} else {
// 		loadJS("js/lang.sl.js");
// 		$("#lang-sl").css("font-weight", "bolder");	
// 	}
 
// 	function fillIn(key, value) {
// 		document.getElementById(key).innerHTML = value;	 	
// 	}
 
 
// 	//Fill in translations	
// 	for(var key in lang) {
// 	  fillIn(key, lang[key]);
// 	}
 
// });
