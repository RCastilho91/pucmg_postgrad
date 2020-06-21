"use strict";

$(document).ready(function () {

    // funcao com clique unico
    $('#box')
    .click(function(){
        mensagem('Clique');
    })
    
    // funcao com duplo clique
    .dblclick(function(){
        mensagem('Duplo clique');
    })

    // funcao com mouse pressionado
    .mousedown(function(e){
        mensagem('botao pressionado');
    })

    // funcao com mouse liberado
    .mouseup(function(e){
        mensagem('botao solto');
    })

    // funcao de limpeza
    .click( function(e) {
        $('#resultados').empty();
    })

    // menu acessado pelo botao direito
    .contextmenu(function(e){
        // evitando execucao do padrao
        e.preventDefault();
        // colocando um novo evento
        mensagem('Botao direito clicado');
    });

});

function mensagem(str){
    $('#resultados').append($('<p>' + str + '</p>'));
}