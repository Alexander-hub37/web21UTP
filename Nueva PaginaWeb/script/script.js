$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Creativo", "Trabajo en Equipo", "Liderazgo", "Innovación", "Empatía"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-2", {
        strings: ["Sobre mi Educación"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-3", {
        strings: ["Experiencia Laboral"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

});
