// rendering product section 
const productsContainer = document.querySelector(".products-container");


let drawProducts = ()=>{
    productsData.map((product)=>{
        if(product.id < 6){
            productsContainer.innerHTML +=`
            <div class="product-box">
                <a  class="flex-center" onclick="getProductId(${product.id})">
                    <img src="${product.img}" alt="${product.name}">
                </a>
                <p class="product-marka"> ${product.marka} </p>
                <p class="product-name"> ${product.name} </p>
                <div class="product-box-lastp flex">
                    <p class="product-price"> $${product.price} </p>
                    <i class="fas fa-shopping-cart shopping-cart" onclick="addToCart(${product.id})"></i>
                </div>
            </div>
        `
        }        
    })
}
drawProducts();

// rendering new arrivals section 
const arivalsContainer = document.querySelector(".arivals-container");
let drawArrivalsProducts = ()=>{
    productsData.map((product)=>{
        if(product.id > 5 && product.id < 11){
            arivalsContainer.innerHTML +=`
            <div class="product-box">
                <a  class="flex-center" onclick="getProductId(${product.id})">
                    <img src="${product.img}" alt="${product.name}">
                </a>
                <p class="product-marka"> ${product.marka} </p>
                <p class="product-name"> ${product.name} </p>
                <div class="product-box-lastp flex">
                    <p class="product-price"> $${product.price} </p>
                    <i class="fas fa-shopping-cart shopping-cart" onclick="addToCart(${product.id})"></i>
                </div>
            </div>
        `
        }        
    })
}
drawArrivalsProducts();


//get-product-id
let getProductId = (id)=>{
    localStorage.setItem("productId" , id);
    window.location = "productsDetails.html";
}