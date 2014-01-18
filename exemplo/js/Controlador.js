(function(require, define) {

    var Modulo = function(id, r) {
        this.id = id;
        this.referencia = r;
    };

    var Controlador = function() {
        this.modulos = [];
        this.modulosJaInit = {};
    };

    Controlador.prototype = {

        constructor: Controlador,

        //retorna a instancia ja fazendo o init
        //caso ja tenha feito o init entao so retorna a referencia
        get: function(idModulo) {
            var mod = this.getModulo(idModulo);
            if (mod === false) {
                return null;
            }
            if (this.modulosJaInit[idModulo]) {
                console.log("modulosJaInit");
                return this.modulosJaInit[idModulo];
            }
            var obj = new mod();
            obj.init();
            this.modulosJaInit[idModulo] = obj;
            return obj;
        },

        getModulo: function(idModulo) {
            for (var i = 0; i < this.modulos.length; i++) {
                var m = this.modulos[i];
                if (m.id === idModulo) {
                    return m.referencia;
                }
            }
            console.error("Não encontrou: " + idModulo);
            return false;
        },

        carregarModulos: function(vetIdModulos, callback) {
            var that = this;
            //var cont = 0;
            require(vetIdModulos, function() {
                for (var i = 0; i < vetIdModulos.length; i++) {
                    that.modulos.push(new Modulo(vetIdModulos[i], require(vetIdModulos[i])));
                };
                callback(that.modulos);
            });
            //outra maneira
            // for (var i = 0; i < vetIdModulos.length; i++) {
            //     (function(idModulo) {
            //         require([idModulo], function(mod) {
            //             that.modulos.push(new Modulo(idModulo , mod));
            //             cont++;
            //             if(cont === vetIdModulos.length){
            //                 callback(that.modulos);
            //             }
            //         });
            //     })(vetIdModulos[i]);
            // }
        }
    };


    Controlador.inicializaControladores = function($contexto, callback) {
        if (arguments.length <= 1) {
            callback = $contexto;
            $contexto = $("body");
        }
        var vetModulos = [];
        var modulos = $contexto.find("[data-controlador]").each(function() {
            var modulo = $(this).attr("data-controlador");
            for (var i = 0; i < vetModulos.length; i++) {
                if (vetModulos[i] === modulo) {
                    throw new Error("modulo esta sendo colocado mais de uma vez: " + modulo);
                }
            }
            vetModulos.push(modulo);
        });
        if (vetModulos.length == 0) {
            throw new Error("Nenhum controlador");
        }
        var objControlador = new Controlador();
        objControlador.carregarModulos(vetModulos, function(vetModulos) {
            for (var i = 0; i < vetModulos.length; i++) {
                objControlador.get(vetModulos[i].id); //apenas para dar o init()
            }
            if (typeof callback === "function") {
                callback(objControlador);
            }
        });
    };

    //===========================================

    define(function() {
        return Controlador;
    });


})(require, define);