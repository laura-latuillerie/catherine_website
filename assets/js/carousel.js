$('#carousel-formules-videos').slick({
 dots: true,
 infinite: true,
 speed: 300,
 slidesToShow: 4,
 slidesToScroll: 4,
 responsive: [
  {
    breakpoint: 1200,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3
    }
  },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
   {
     breakpoint: 768,
     settings: {
       slidesToShow: 1,
       slidesToScroll: 1
     }
   }
   // You can unslick at a given breakpoint now by adding:
   // settings: "unslick"
   // instead of a settings object
 ]
});

$('#carousel-formules-photos').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
   {
     breakpoint: 1200,
     settings: {
       slidesToShow: 3,
       slidesToScroll: 3
     }
   },
     {
       breakpoint: 992,
       settings: {
         slidesToShow: 2,
         slidesToScroll: 2
       }
     },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
 });


  /* Slick needs no get Reinitialized on window Resize after it was destroyed */
  $(window).on('load resize orientationchange', function() {
        var $carousel = $('#carousel-team-polaroid');
        /* Initializes a slick carousel only on mobile screens */
        // slick on mobile
        if ($(window).width() > 768) {
            if ($carousel.hasClass('slick-initialized')) {
                $carousel.slick('unslick');
                $carousel.css('display', 'flex');
                $carousel.css('flex-wrap', 'wrap');
            }
        }
        else{
            if (!$carousel.hasClass('slick-initialized')) {
                $carousel.slick({
                    infinite: true,
                    speed: 300,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    mobileFirst: true,
                });
            }
        }
    });
