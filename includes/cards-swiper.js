const swiper = new Swiper('.cards-swiper', {
    // Default parameters
    slidesPerView: 3,
    spaceBetween: 0,
    direction: 'horizontal',
    loop: false,

    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 3,
        spaceBetween: 15
      }
    }
})