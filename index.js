$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-xmark');
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load',function(){
        $('#menu').removeClass('fa-xmark');
        $('header').removeClass('toggle');

        if($(window).scrollTop() > 0){
            $('.top').show();
        }else{
            $('top').hide();
        }
    });

    //smooth scrolling

    $('a[href="#"]').on('click',function(e){

        e.preventDefault();

        $('html, body').animated({

            scrollTop : $($(this).attr('href')).offset().top,

        },
            500,
            'linear'
        );

    });

});

//type text animation
var type = new Typed(".type-text", {
    strings: ["JOHN CARLO","CODING", "FRONT-END DEVELOPER", "STUDENT"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
});