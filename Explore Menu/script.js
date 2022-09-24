// swiper

var swiper = new Swiper(".review-slider", {
  loop: true,
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
      delay: 5500,
      disableOnInteraction: false,
  },

  pagination: {
      el: ".swiper-pagination",
  },
});