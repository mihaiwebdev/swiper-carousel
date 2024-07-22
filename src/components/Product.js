const Product = (product) => {
  const slide = document.createElement("div");
  slide.className = "swiper-slide";

  slide.innerHTML = `
    <div class="product-card"> 
      <img class="product-img" src="${product.image}" alt="product-image" />
      <button class="wishlist-btn">
        <i class="fa-regular fa-heart"></i>
      </button>
      
      <div class="product-info">
        <h3 class="product-name" title="${product.name}">${product.name}</h3>

        <div class="product-info-footer">
          ${
            product.discounted_price
              ? `
            <div class="discounted-product-price" >
              <small class="original-price">${product.original_price.toFixed(
                2
              )} &euro;</small>
              <p class="discounted-price">${product.discounted_price.toFixed(
                2
              )} &euro;</p>
            </div>  
            `
              : `
            <p class="product-price">${product.original_price.toFixed(
              2
            )} &euro;</p>
            `
          }

          <button class="add-to-cart-btn">Add to cart <i class="fa-solid fa-chevron-right"></i></button>
        </div>
      </div>
    </div>
  `;

  return slide;
};

export default Product;
