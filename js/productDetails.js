let productDetailsContainer = document.querySelector(".products-details-container");
let productId = localStorage.getItem("productId")

productDetailsPage = ()=>{
    let oldOne = addedProductsArr.find((product)=> product.id == productId) ;
    let notAddedYet = productsData.find((product)=> product.id == productId);
    
    if(oldOne){
        productDetailsContainer.innerHTML = `
           <div class="products-details-box flex">
                <figure>
                    <img src="${oldOne.img}" alt="${oldOne.name}">
                </figure>
                <div class="products-details-info">
                    <p class="products-details-name"> ${oldOne.name} </p>
                    <p class="products-details-price"> $ ${oldOne.price} </p>
                    <div>
                        <input class="qty-inp" type="number" value="${oldOne.quantity}" >
                        <button class="btn" onclick="changeQuantityDetails(${oldOne.id})"> Add To Cart </button>
                    </div>
                    <h3> Product Details </h3>
                    <p class="products-details-dec"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quasi, cum modi
                            cupiditate praesentium libero facilis tempore perspiciatis quas voluptatibus.
                    </p>
                </div>
           </div>
        `
    }else{
        productDetailsContainer.innerHTML = `
           <div class="products-details-box flex">
                <figure>
                    <img src="${notAddedYet.img}" alt="${notAddedYet.name}">
                </figure>
                <div class="products-details-info">
                    <p class="products-details-name"> ${notAddedYet.name} </p>
                    <p class="products-details-price"> $ ${notAddedYet.price} </p>
                    <div>
                        <input class="qty-inp" type="number" value="${notAddedYet.quantity}" >
                        <button class="btn" onclick="changeQuantityDetails(${notAddedYet.id})"> Add To Cart </button>
                    </div>
                    <h3> Product Details </h3>
                    <p class="products-details-dec"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quasi, cum modi
                            cupiditate praesentium libero facilis tempore perspiciatis quas voluptatibus.
                    </p>
                </div>
           </div>
        `
    }
    updateCart();
}
productDetailsPage();

//changeQuantity
let qtyInp = document.querySelector(".qty-inp");

function changeQuantityDetails(id){
    let qtyInpValue = parseInt(qtyInp.value);

    if(qtyInpValue > 0){
        if(localStorage.getItem("userName")){
            if(addedProductsArr && addedProductsArr.length > 0){
                let chosenOne = addedProductsArr.find(product => product.id === id);
                let newOne = productsData.find(product => product.id === id);
                if(chosenOne){
                    chosenOne.quantity = qtyInpValue + chosenOne.quantity;
                }else{
                    addedProductsArr.push({
                        ...newOne,
                        quantity: qtyInpValue 
                    });
                }
            }else if(addedProductsArr.length === 0  || addedProductsArr == -1){
                let newOne = productsData.find(product => product.id === id);
                addedProductsArr.push({
                    ...newOne,
                    quantity: qtyInpValue 
                });
            }
        }else{
            window.location = "register.html"
        }
    }else{
        alert("please insert valid number");
    }   
    updateCart();
}




