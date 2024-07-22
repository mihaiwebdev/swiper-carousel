import setupCarousel from "./src/setupCarousel";
import "./style.css";

document.querySelector("#app").innerHTML = `
  <div class="container">
    <div class="swiper products-carousel">
        <div class="swiper-wrapper"></div>
        <button class="swiper-button-prev"><i class="fa-solid fa-circle-chevron-left"></i></button>
        <button class="swiper-button-next"><i class="fa-solid fa-circle-chevron-right"></i></button>
    </div>
  </div>
`;

const swiperWrapperEl = document.querySelector(".swiper-wrapper");
setupCarousel(swiperWrapperEl);
