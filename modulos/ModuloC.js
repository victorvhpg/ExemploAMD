define(function() {
    "use strict";

    console.log("ModuloC.js");

    var ModuloC = function() {
        this.nome = "C";
    };

    ModuloC.prototype = {

        constructor: ModuloC,

        getNome: function() {
            return this.nome;
        }
    };


    return ModuloC;

});