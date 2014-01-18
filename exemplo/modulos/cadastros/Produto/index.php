<!doctype html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <?php
        include("../../../inc/head.php");
    ?>
    <script>


        require(["jquery", "js/Controlador"],function($,Controlador){
            $(function($){
                    Controlador.inicializaControladores($("body"),function(controladores){
                        var produtoConsulta = controladores.get("modulos/cadastros/Produto/js/ProdutoConsulta");
                        var produtoCadastro = controladores.get("modulos/cadastros/Produto/js/ProdutoCadastro");
                        var xxxxx = controladores.get("modulos/cadastros/Produto/js/xxxxx");
                    });
            });
        });

    </script>

</head>
<body>



<?php
include('conteudo.php')
?>


</body>
</html>