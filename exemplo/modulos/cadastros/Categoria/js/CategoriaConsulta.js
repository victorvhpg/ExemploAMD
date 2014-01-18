define(["jquery"], function($) {
    "use strict";


    var CategoriaConsulta = function() {
        this.nome = "A";
    };

    CategoriaConsulta.prototype = {

        getNome: function() {
            return this.nome;
        },

        init: function() {
            console.log("CategoriaConsulta:init");
        }
    };


    return CategoriaConsulta;

});