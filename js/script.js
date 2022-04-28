
$(function(){
  // Banner Slider
  $('.slider-main-wrapper').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover:false,
    arrows: false,
    dots:false,  
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      }
    ] 
    });

    // Video Player Button
    new VenoBox({
      selector: '.video-play-button',
  }); 

  $('.test-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover:false,
    arrows: false,
    dots:false, 
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      }
    ]
  });

   // img-slide 
  $('.img-slide-wrapper').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: false,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows:true,
    pauseOnHover:false,
    prevArrow:".pro-left",
    nextArrow:".pro-right",
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode:false,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode:false,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode:false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode:false,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode:false,
        }
      }
    ]
  });


   //scroll-spy & Smooth-scrolling
   var scrollLink = $('.scroll-link');
   $(scrollLink).on('click', function (event) {
     event.preventDefault();
     $('html,body').animate({
       scrollTop: $(this.hash).offset().top - 10
     }, 1000);
   });
   $(window).on('scroll', function () {
     var scrollTop = $(this).scrollTop();
     scrollLink.each(function () {
       var sectionhead = $(this.hash).offset().top - 10;
       if (scrollTop >= sectionhead) {
         $(this).parent().addClass('active');
         $(this).parent().siblings().removeClass('active');
       }
     });
   });
   
   $(".navbar-toggler").click(function(event) {
     event.stopPropagation();
     $("#hamburger-menu").toggleClass("open");
     $("#menu-container .menu-list").toggleClass("active");
     slideMenu();
 
     $("body").toggleClass("overflow-hidden");
   });

//mixit-up
var mixer = mixitup(containerEl);
var containerEl = document.querySelector('.mixit-up');

});
// Counter
$('.counter').counterUp({
  delay: 10,
  time: 2500,
});


// sticky-menu + Top-up-Button
$(window).scroll(function(){
  var top = $(this).scrollTop()
  // if(top > 900){
  //   $(".navbar").addClass("sticky-menu")
  // }
  // else{
  //   $(".navbar").removeClass("sticky-menu")
  // }
  if(top > 300){
    $(".top-up-button").fadeIn(300)
  }
  else{
    $(".top-up-button").fadeOut(300)
  }
});

$(".top-up-button").click(function(){
  $("html,body").animate({scrollTop:0},1000)
});

$(".navbar-toggler").click(function(event) {
  event.stopPropagation();
  $("#hamburger-menu").toggleClass("open");
  $("#menu-container .menu-list").toggleClass("active");
  slideMenu();

  $("body").toggleClass("overflow-hidden");
});



