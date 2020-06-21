"use strict";

$(document).ready(function(){

    // fazendo a troca de bg com diferenca de indice par e impar

    $('#btn1').click(function(){
        $('p.para').each(function(i){
            if ( i % 2 == 0 ) {
                css('background-color', '#5CB85C');
            } else {
                css('background-color', '#D9534F');
            }
        });
    });

});