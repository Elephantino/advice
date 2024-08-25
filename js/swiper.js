
const swiper = new Swiper('.swiper', {

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
    dynamicBullets: true,

    // type: 'progressbar'
  },

  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },

  simulateTouch: true,
  touchRatio: 1,
  touchAngle: 50,
  grabCursor: true,

  slideToClickedSlide: true,

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  mousewheel: {
    invert: true,
    // eventsTarget: '.swiper',
    sensitivity: 1,
    invert: false,
  },

  slidesPerView: 3,

  slidesPerGroup: 1,

  spaceBetween: 40,

  // centeredSlides: true,

  initialSlide: 0,

  // loop: true,

  freeMode: true,

  // autoplay: {
  //   delay: 5000,
  //   stopOnSlide: false,
  //   disableOnInteraction: false,
  // },

  speed: 300,

  // direction: 'vertical',

  // effect: 'fade',


  // fadeEffect: {
  //   crossFade: true
  // },


  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  },






})