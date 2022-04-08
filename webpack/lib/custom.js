import * as skrollr from './skrollr.min.js';

window.onload = function () {
    parallax();
};

function parallax() {
    var s = skrollr.init();

    var scene1 = document.getElementById('scene1');
    var parallaxInstance1 = new Parallax(scene1, {
        relativeInput: true
    });

    var scene2 = document.getElementById('scene2');
    var parallaxInstance2 = new Parallax(scene2);

    var sceneMaster = document.getElementById('scene-master');
    var parallaxInstanceMaster = new Parallax(sceneMaster);
}