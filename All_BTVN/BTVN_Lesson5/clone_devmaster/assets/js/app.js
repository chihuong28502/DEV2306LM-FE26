$(document).ready(function(){
    $('.img-slider').slick(
        {
            // items
            slidesToShow: 4,
            // scrolls number
            slidesToScroll :1,
            infinity : true,
            // auto scroll 2s
            autoplay: true,
            autoplaySpeed: 2000,
            // onClick buttom scroll true
            arrows: true,
            // add icon button to slick slider
            prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa-solid fa-chevron-left' aria-hidden='true'></i></button>",
            nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa-solid fa-chevron-right' aria-hidden='true'></i></button>",
        // 
            responsive: [
                {
                    // <=1024px
                    breakpoint: 1024,
                    settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    }
                },
                {
                    // <=600px
                    breakpoint: 600,
                    settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    }
                },
                {
                    // <=480px
                    breakpoint: 480,
                    settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    }
                }
            ]
        }
    );
});