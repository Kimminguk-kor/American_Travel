$(function(){
     $('.thirdBannerBox').slick({
          centerMode: true,
          centerPadding: '10px',
          dots: true,
          slidesToShow: 3,
          autoplay: true,
          autoplaySpeed: 2000,
          responsive: [
            {
              breakpoint: 767,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '10px',
                dots: true,
                slidesToShow: 1,
                autoplay: true,
            utoplaySpeed: 2000,
              }
            }
          ]
        });

        $('.cpVideoBanner').slick({
          infinite: false,
          speed: 300,
          slidesToShow: 4,
          slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        });
})