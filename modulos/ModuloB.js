define(function() {
    "use strict";

    console.log("ModuloB.js");

    var ModuloB = function() {
        this.nome = "B";
    };

    ModuloB.prototype = {
        
        constructor: ModuloB,

        getNome: function() {
            return this.nome;
        }
    };


    return ModuloB;

});