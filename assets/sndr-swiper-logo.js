jQuery(document).ready(function() {

  var attributesData = jQuery('.sndr-logo-carousel-data-attributes').attr('data-attributes');
  console.log(attributesData);
  var slidePerView = attributesData.search('slidePerView');
  var slidePerViewNumber = attributesData.slice(slidePerView + 14, slidePerView + 15);
  var slideSpaceBetween = attributesData.search('slideSpaceBetween');
  var slideSpaceBetweenNumber = attributesData.slice(slideSpaceBetween + 19, slideSpaceBetween + 21);
  var infiniteLoop = attributesData.search('infiniteLoop');
  var infiniteLoopBool = attributesData.slice(infiniteLoop + 14, infiniteLoop + 18);
  var autoPlaySpeed = attributesData.search('autoPlaySpeed');
  var autoPlaySpeedBool = attributesData.slice(autoPlaySpeed + 15, autoPlaySpeed + 20);





  var script = document.createElement('script');
    
  // Set the type attribute
  script.type = 'text/javascript';
  
  // Add some JavaScript code
  script.textContent = `
      (function() {
          console.log('Dynamic script executed!');
          var swiper = new Swiper(".sndrSwiper", {
            slidesPerView: ${slidePerViewNumber},
            spaceBetween: ${parseInt(slideSpaceBetweenNumber)},
            centeredSlides: true,
            loop: ${infiniteLoopBool},
            autoplay: { delay: ${parseInt(autoPlaySpeedBool)},
              disableOnInteraction: false,            
            },
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });
      })();
  `;

  document.body.appendChild(script);
  
})(jQuery);