'use strict';

/*==================== BLOCKEO CLICK DERECHO ====================*/
function disableIE() {
    if (document.all) {
        return false;
    }
}
function disableNS(e) {
    if (document.layers || (document.getElementById && !document.all)) {
        if (e.which==2 || e.which==3) {
            return false;
        }
    }
}
if (document.layers) {
    document.captureEvents(Event.MOUSEDOWN);
    document.onmousedown = disableNS;
} 
else {
    document.onmouseup = disableNS;
    document.oncontextmenu = disableIE;
}
document.oncontextmenu=new Function("return false");


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]');

function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 70;
        var sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.navbar-collapse a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.navbar-collapse a[href*=' + sectionId + ']').classList.remove('active')
        }
    });
}
window.addEventListener('scroll', scrollActive);



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