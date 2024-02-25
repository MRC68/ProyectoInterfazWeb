$(document).ready(function(){
    // Mostrar/ocultar menú
    $('.boton-desplegable').click(function(){
        $('.contenido-desplegable').slideToggle();
        $('.contenido-desplegable').prop('disabled', false);
    });
    // Mostrar/ocultar legal
    $('button.aceptarLegal').on('click',function(){
        $('.legal').slideUp("slow",function(){
        });
    });
    $('#abrirlegal').on('click',function(){
        $('.legal').slideToggle();
    });
    $('#abrircookies').on('click',function(){
        $('.cookies').fadeIn();
    });
    $('button.vercookies').on('click',function(){
        $('.cookies').fadeIn();
    });
    $('button.aceptarcookies').on('click',function(){
        $('.cookies').fadeOut();
    });
    // Mostrar/ocultar cookies
});