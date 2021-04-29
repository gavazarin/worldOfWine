document.querySelectorAll('.dropdown-menu').forEach(function (element) {
    element.addEventListener('click', function (e) {
        e.stopPropagation();
    });
})

const swiper = new Swiper('.swiper-container', {
    slidesPerView: 7,
    spaceBetween: 0,
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    allowTouchMove: false,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2,
            spaceBetween: 0
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 2,
            spaceBetween: 0
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 4,
            spaceBetween: 0
        },
        // when window width is >= 992px
        992: {
            slidesPerView: 7,
            spaceBetween: 0
        }
    }
});