$(document).ready(function(){
    console.log('Document ready');
    $('#menu').click(function(){
        console.log('Menu clicked');
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load resize', function(){ // Added 'resize' event
        console.log('Window scrolled, loaded, or resized');
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');
    });
});
