$('.owl-carousel').owlCarousel({
    stagePadding: 50,
    loop:true,
    margin:10,
    nav:true,   
    autoplay:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:4
        },
        1000:{
            items:5 
        }
    }
})

