$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        if (this.scrollY > 300) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });
    // slide up 
    $('.scroll-up-btn').click(function() {
        $('html').animate({ scrollTop: 0 });

    });
    // toggle menu
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $(' .menu-btn i').toggleClass("active");
    })
    $('.menu').click(function() {
        $('.navbar .menu').toggleClass("active");
        $(' .menu-btn i').toggleClass("active");
    })
});











// typing animation script
var typed = new Typed(".typing", {
    strings: ["Front-end Developer"],
    typeSpeed: 100,
    backSpeed: 90,
    loop: true,
})


// var typed = new Typed(".typing-2", {
//     strings: ["React", "Javascript", "Express", "HTML", "CSS", "Typescript", "MongoDb", "Nodejs"],
//     typeSpeed: 100,
//     backSpeed: 60,
//     loop: true,
// })


// Scroll to specific values
// scrollTo is the same
window.scroll({
    top: 2500,
    left: 0,
    behavior: 'smooth'
});

// Scroll certain amounts from current position 
window.scrollBy({
    top: 100, // could be negative value
    left: 0,
    behavior: 'smooth'
});

// 

AOS.init({
    offset: 250,
    duration: 600,
});