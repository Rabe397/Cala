//addToCart
let addedProductsArr;
if(localStorage.getItem("addedProducts")){
    addedProductsArr = JSON.parse(localStorage.getItem("addedProducts"));
}else{
    addedProductsArr = [];
}

let addToCart = (id)=>{
    if(localStorage.getItem("userName")){
        if(addedProductsArr.some((product)=> product.id === id)){
            changeQuantity("plus" , id);
        }else{
            let chosenItem = productsData.find((product)=> product.id === id);
            addedProductsArr.push(chosenItem);
        }
    }else{
        window.location = "register.html";
    }

    updateCart();
}

let updateCart = ()=>{
    localStorage.setItem("addedProducts" , JSON.stringify(addedProductsArr));
    cartNav();
    subtotal();
    countBadge();
}

//subtotal
let totalContainer = document.querySelector(".cart-total");
function subtotal(){
    let totalPrice = 0;
    let totalItems = 0;
    addedProductsArr.map((product)=>{
        totalItems += product.quantity;
        totalPrice += product.quantity * product.price;
    })
    totalContainer.innerHTML = `<p> ${totalItems} items , total : ${totalPrice}$ </p>`
}
subtotal();

//cart-on-nav
const cartNavParent = document.querySelector(".cart-nav");
const cartNavContainer = document.querySelector(".cart-nav-container");
const viewProducts = document.querySelector(".view-products");

let cartNav = ()=>{
    cartNavContainer.innerHTML = "";
    addedProductsArr.map((product)=>{
        cartNavContainer.innerHTML +=`
            <div class="cart-nav-box flex">
                <figure>
                    <img src="${product.img}" alt="${product.name}">
                </figure>
                <span class="cart-nav-price"> $${product.price} </span>
                <div class="change-quantity">
                    <button class="increase-quantity" onclick="(changeQuantity('plus' , ${product.id}))"> + </button>
                    <span class="quantity"> ${product.quantity} </span>
                    <button class="decrease-quantity" onclick="(changeQuantity('minus' , ${product.id}))"> - </button>
                </div>
                <button class="remove-product remove-btn" onclick="(removeProduct(${product.id}))"> x </button>
            </div>
        `
    })

    cartNavContainer.innerHTML !== "" ?
    viewProducts.style.display = "block"
    : viewProducts.style.display = "none"
}
cartNav();

//open-close-cart-nav
const navShoppingCart = document.querySelector(".nav-shopping-cart");
cartNavParent.style.display = "none";

navShoppingCart.addEventListener("click" , ()=>{
    if(cartNavParent.style.display === "none"){
        cartNavParent.style.display = "block"; 
    }else{
        cartNavParent.style.display = "none";
    }
})

//remove-product
function removeProduct(id){
    addedProductsArr =  addedProductsArr.filter((product)=> product.id !== id );
    updateCart();
}





//badge
let badge = document.querySelector(".badge")
function countBadge(){
    addedProductsArr && addedProductsArr.length > 0 ?
    badge.innerHTML = addedProductsArr.length :
    badge.innerHTML = 0;

}
countBadge();