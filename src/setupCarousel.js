import Swiper from "swiper";
import { Navigation, Autoplay } from "swiper/modules";

import Product from "./components/Product";
import { getProducts } from "./services/products";

const populateCarousel = async (swiperEl) => {
  const products = await getProducts();

  products.forEach((product) => {
    const slide = Product(product);
    swiperEl.appendChild(slide);
  });
};

const addWishlistBtnLogic = (swiperEl) => {
  swiperEl.addEventListener("click", (event) => {
    if (event.target.classList.contains("fa-regular")) {
      event.target.className = "fa-solid fa-heart";
      event.target.parentElement.classList.toggle("active");

      return;
    }

    if (event.target.classList.contains("fa-solid")) {
      event.target.className = "fa-regular fa-heart";
      event.target.parentElement.classList.toggle("active");

      return;
    }
  });
};

const setupCarousel = async (swiperEl) => {
  // Populate carousel with products slides
  await populateCarousel(swiperEl);

  // Wishlist button logic
  addWishlistBtnLogic(swiperEl);

  // Config swiper
  Swiper.use([Autoplay, Navigation]);

  const swiper = new Swiper(".products-carousel", {
    spaceBetween: 30,
    slidesPerView: 1,
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1080: {
        slidesPerView: 3,
      },
    },
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
};

export default setupCarousel;
