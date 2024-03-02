//change-quantity
function changeQuantity(action ,id){
    let chosenItem = addedProductsArr.find((product)=> product.id === id);
    let productQuantity = chosenItem.quantity;
    
    if(action === "plus"){
        chosenItem.quantity =  productQuantity + 1;
    }else if(action === "minus" && productQuantity > 1){
        chosenItem.quantity =  productQuantity - 1;;
    }
    updateTable();
    updateCart();
}