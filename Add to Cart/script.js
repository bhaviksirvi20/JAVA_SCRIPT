let count = 0;
let selected = []
let countadd = document.getElementById("count");
let product = document.getElementById("product");

let array = [
  {
    category: "Smart Watches",
    title: "Apple Watch Series 8 (GPS, 45mm)",
    currentPrice: 399.99,
    originalPrice: 429.99,
    rating: 4.5,
    ratingCount: 142,
    badge: "Sale",
    image:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    category: "Headphones",
    title: "Sony WH-1000XM5 Wireless",
    currentPrice: 349.99,
    originalPrice: null,
    rating: 5,
    ratingCount: 256,
    badge: "New",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    category: "Smartphones",
    title: "iPhone 14 Pro (128GB)",
    currentPrice: 999.0,
    originalPrice: null,
    rating: 4.5,
    ratingCount: 421,
    badge: "Bestseller",
    image:
      "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    category: "Laptops",
    title: 'MacBook Pro 14" (M2 Pro, 16GB)',
    currentPrice: 1999.0,
    originalPrice: null,
    rating: 4.5,
    ratingCount: 324,
    badge: "Hot",
    image:
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    category: "Footwear",
    title: "Nike Air Max 270 Running Shoes",
    currentPrice: 129.99,
    originalPrice: 185.99,
    rating: 4.5,
    ratingCount: 198,
    badge: "-30%",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    category: "Gaming",
    title: "Sony PlayStation 5 Console",
    currentPrice: 499.99,
    originalPrice: null,
    rating: 4.5,
    ratingCount: 634,
    badge: null,
    image:
      "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
];

for (let i = 0; i < array.length; i++) {
  let card = document.createElement("div");
  card.innerHTML += `
  <div class="product-card" id="product-card">
  <div class="product-image">
  <img src="${array[i].image}" alt="${array[i].title}">
  <span class="product-badge sale">Sale</span>
  </div>
  <div class="product-info">
  <div class="product-category">${array[i].category}</div>
  <h3 class="product-title">${array[i].title}</h3>
  <div class="product-price">
  <span class="current-price">$ ${array[i].currentPrice}</span>
  <span class="original-price">$429.99</span>
  </div>
  <div class="product-rating">
  <div class="stars">
  <i class="fas fa-star"></i>
  <i class="fas fa-star"></i>
  <i class="fas fa-star"></i>
  <i class="fas fa-star"></i>
  <i class="fas fa-star-half-alt"></i>
  </div>
  <span class="rating-count">${array[i].rating}</span>
  </div>
  <button class="btn btn-primary">
  <i class="fas fa-cart-plus"></i>
  Add to Cart
  </button>
  </div>
  </div>
  `;
  product.appendChild(card);
  
  // cart file section
  card.querySelector("button").addEventListener("click" , function () {
    
    
    alert("Card Add Successfully.....");
    
    count++;
    console.log(count);
    
    countadd.innerText = count;
    
    selected.push(array[i])
    localStorage.setItem("bhavik", JSON.stringify(selected))
    localStorage.setItem("bhavik1", count)
    
  })
  
  
}




