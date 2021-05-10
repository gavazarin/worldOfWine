const swiper = new Swiper('.cards-swiper', {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  direction: 'horizontal',
  loop: false,

    // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },


  // Responsive breakpoints
  breakpoints: {
    375: {
      slidesPerView: 1.1,
      spaceBetween: 15
    },
    // when window width is >= 580px
    580: {
      slidesPerView: 1.2,
      spaceBetween: 30
    },
    // when window width is >= 850px
    850: {
      slidesPerView: 2.1,
      spaceBetween: 30
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 2.3,
      spaceBetween: 30
    },
    // when window width is >= 1355px
    1355: {
      slidesPerView: 3.2,
      spaceBetween: 30
    }
  }
})