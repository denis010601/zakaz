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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzd2lwZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIHN3aXBlciA9IG5ldyBTd2lwZXIoXCIuY2F0ZWdvcnktc3dpcGVyXCIsIHtcbiAgc2xpZGVzUGVyVmlldzogMixcbiAgc3BhY2VCZXR3ZWVuOiA1LFxuICBsb29wRmlsbEdyb3VwV2l0aEJsYW5rOiB0cnVlLFxuICBicmVha3BvaW50czoge1xuICAgIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzID49IDMyMHB4XG4gICAgNDgwOiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgICAgc3BhY2VCZXR3ZWVuOiA1XG4gICAgfSxcbiAgICA3Njg6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDQsXG4gICAgICBzcGFjZUJldHdlZW46IDVcbiAgICB9LFxuICAgIDExODA6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDQsXG4gICAgICBzcGFjZUJldHdlZW46IDE1XG4gICAgfSxcbiAgfSxcbiAgbmF2aWdhdGlvbjoge1xuICAgIG5leHRFbDogXCIuYnRuLW5leHRcIixcbiAgICBwcmV2RWw6IFwiLmJ0bi1wcmV2XCIsXG4gIH0sXG59KTsiXSwiZmlsZSI6InN3aXBlci5qcyJ9