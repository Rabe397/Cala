//rendering-shop-products-section
let shopProductsContainer = document.querySelector(".shop-products-container");

let drawShopProducts = ()=>{
    productsData.map((product)=>{
        shopProductsContainer.innerHTML +=`
            <div class="product-box">
                <a class="flex-center" onclick="getProductId(${product.id})">
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
    )
}
drawShopProducts();

//get-product-id
let getProductId = (id)=>{
    localStorage.setItem("productId" , id);
    window.location = "productsDetails.html";
}

//search
let searchInpName = document.getElementById("search-inp-name");
let searchInpLetter = document.getElementById("search-inp-letter");


//search-by-name
searchInpName.addEventListener("keyup" , (e)=>{
    searchByName(e.target.value.toLowerCase() , productsData);
})

const searchByName = (title , products)=>{
    let searchedProducts = products.filter((item) => item.name === title);
    shopProductsContainer.innerHTML = ""
    searchedProducts.map((product)=>{
        
        shopProductsContainer.innerHTML +=`
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
    )
    if(shopProductsContainer.innerHTML === ""){
        drawShopProducts();
    }
}

//search-by-letter
searchInpLetter.addEventListener("keyup" , (e)=>{
    searchByLetter(e.target.value.toLowerCase() , productsData);
})

const searchByLetter = (title , products)=>{
    let letterSearchedProducts = products.filter((product)=> product.name.indexOf(title) !== -1);
    shopProductsContainer.innerHTML = ""
    letterSearchedProducts.map((product)=>{
        
        shopProductsContainer.innerHTML +=`
            <div class="product-box">
                <a class="flex-center" onclick="getProductId(${product.id})">
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
    )
    if(shopProductsContainer.innerHTML === ""){
        drawShopProducts();
    }
}