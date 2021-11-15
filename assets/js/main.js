'use strict';

$(document).ready(function(){

    // navigation bar toggle
    $('#navbar-toggler').click(function(){
        $('.navbar-collapse').slideToggle(400);
    });

    $('.nav-item').click(function(){
        $('.navbar-collapse').slideToggle(0);
    });

    // navbar bg change on scroll
    $(window).scroll(function(){
        let pos = $(window).scrollTop();

        if(pos >= 100){
            $('.navbar').addClass('cng-navbar');
        }else{
            $('.navbar').removeClass('cng-navbar');
        }
    });

});