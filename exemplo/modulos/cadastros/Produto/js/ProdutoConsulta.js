define(["jquery"],function($) {
    "use strict";


    var ProdutoConsulta = function() {
        this.nome = "ProdutoConsulta";
    };

    ProdutoConsulta.prototype = {

        getNome: function() {
            return this.nome;
        },

        init: function(){
            console.log("ProdutoConsulta init");
        }
    };


    return ProdutoConsulta;

});