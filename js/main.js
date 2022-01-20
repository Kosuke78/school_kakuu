window.onload = function() {

 var mySwiper = new Swiper ('.swiper-container', {
    slidesPerView : 3,
    spaceBetween : 50,
    loop : true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        700: {
          slidesPerView: 1,
        },
        1000: {
          slidesPerView: 2,
        }
      }
 });
}