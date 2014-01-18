define(["jquery"], function($) {
    "use strict";


    var ProdutoCadastro = function() {
        this.nome = "ProdutoCadastro";
    };

    ProdutoCadastro.prototype = {

        getNome: function() {
            return this.nome;
        },

        init: function() {
            console.log("ProdutoCadastro init");
        }
    };


    return ProdutoCadastro;

});