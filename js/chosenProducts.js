//show-chosen-products-on-table
const chosenProductsTable = document.querySelector(".chosen-products-section table tbody");
const noProduct = document.querySelector(".no-product");


function removeProduct(id){
    addedProductsArr =  addedProductsArr.filter((product)=> product.id !== id );
    updateCart();
    showChosenProducts();
}

function showChosenProducts(){
    chosenProductsTable.innerHTML = "";
    addedProductsArr.length === 0 ?
    noProduct.innerHTML = `
      <p> There is no item in Cart</p>
      <a href="./shop.html"> Go shopping now </a>
    `
    :
    noProduct.innerHTML = `
      <p> Want to buy more </p>
      <a href="./shop.html"> Go shopping now </a>
    `
    
    addedProductsArr.map((product)=>{
        chosenProductsTable.innerHTML +=`
            <tr>
                <td> 
                    <button class="remove-btn" onclick={removeProduct(${product.id})}> X </button>
                </td>
                <td> 
                    <figure>
                        <img src="${product.img}" alt="${product.name}">
                    </figure>
                </td>
                <td> ${product.name} </td>
                <td> $${product.price} </td>
                <td class='p-q'>  ${product.quantity} </td>
                <td> ${product.quantity * product.price} </td>
            </tr>
        `
    })
    
    updateCart();
}
showChosenProducts();

function updateTable(){
    showChosenProducts();
}

