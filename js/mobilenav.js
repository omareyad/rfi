$(document).ready(function(){
    $(".button ").click(function(){
        $(".overlay1").fadeToggle(200);
       $(this).toggleClass('btn-open').toggleClass('btn-close');
        $('.all-content').toggle();
    });
});
$('.overlay1').on('click', function(){
    $(".overlay1").fadeToggle(200);   
    $(".button ").toggleClass('btn-open').toggleClass('btn-close');
    $('.all-content').show();
    open = false;
});