let shop = document.getElementById("shop")

let generate = () => {
    shop.innerHTML = shopItemsData.map((x) => {
        let { id, title, category, image, badge, price, rating, actions } = x

        return `
                <div class="card">
                
                <div class="card-content">
                <h2 class="product-title">${title}</h2>
                <p class="category">${category}</p>

                <img src="${image}" alt="Apple Watch" class="product-image" />
                <div class="badge">${badge}</div>
    
  <div class="price">
  <span class="current">$${price.current}</span>
  ${price.original ? `<span class="original">$${price.original}</span>` : ""}
</div>

<div class="rating">
  ⭐ ${rating.stars} (${rating.total_reviews} reviews)
</div>

    
    <div class="actions">
      <button>Add to Cart</button>
      <button>Wishlist</button>
      <button>Quick Add</button>
    </div>
  </div>
</div>
 

        `
    })

}
generate()