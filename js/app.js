
const swiper = new Swiper('.header-slider-container', {
    // Optional parameters
    speed: 600,
  
    // Navigation arrows
    navigation: {
      nextEl: '.right',
      prevEl: '.left',
   },
   pagination: {
    el: '.pagination',
    type: 'fraction',
   },
});     

const swiperTwo = new Swiper('.main-categories-slider', {
   // Optional parameters
   speed: 600,
   slidesPerView: 4,
   spaceBetween: 50,

   // Navigation arrows
   navigation: {
     nextEl: '.right',
     prevEl: '.left',
  },
});