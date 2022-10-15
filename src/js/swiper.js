var swiper = new Swiper(".category-swiper", {
  slidesPerView: 2,
  spaceBetween: 5,
  loopFillGroupWithBlank: true,
  breakpoints: {
    // when window width is >= 320px
    480: {
      slidesPerView: 3,
      spaceBetween: 5
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 5
    },
    1180: {
      slidesPerView: 4,
      spaceBetween: 15
    },
  },
  navigation: {
    nextEl: ".btn-next",
    prevEl: ".btn-prev",
  },
});