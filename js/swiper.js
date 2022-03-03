var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  autoplay :{
     delay: 3000,
  },
  spaceBetween: 100,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});