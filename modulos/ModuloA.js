define(["jquery","modulos/ModuloB"],function($, ModuloB) {
    "use strict";

    console.log("ModuloA.js");
    console.log($.fn.jquery);

   // var ModuloB = require("modulos/ModuloB");caso fosse "SUGAR" http://requirejs.org/docs/whyamd.html#sugar

    var ModuloA = function() {
        this.nome = "A";
    };

    ModuloA.prototype = {
        
        constructor: ModuloA,

        getNome: function() {
            return this.nome;
        },

        init: function(){
            var b = new ModuloB();
            console.dir(b);
            console.log(b.getNome());
        }
    };


    return ModuloA;

});