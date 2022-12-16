$('.owl-carousel').owlCarousel({
    loop: true,
    responsiveClass: true,
    nav: true,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})

$('.product_carousel').owlCarousel({
    // loop: true,
    responsiveClass: true,
    // autoplay: true,
    // autoplayTimeout: 5000,
    margin: 1,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
})