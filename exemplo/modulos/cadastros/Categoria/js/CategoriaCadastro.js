define(["jquery"], function($) {
    "use strict";

    var CategoriaCadastro = function() {
        this.nome = "A";
    };

    CategoriaCadastro.prototype = {

        getNome: function() {
            return this.nome;
        },

        init: function() {
            console.log("CategoriaCadastro:init");
        }
    };


    return CategoriaCadastro;

});