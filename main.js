define(function(require) {
    "use strict";

    console.log("main.js");

    var $ = require('jquery'),
        ModuloA = require('modulos/ModuloA');


    return {
        init: function() {

            var a = new ModuloA();
            a.init();

        }
    };

});