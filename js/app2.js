function updateProductNumber(product, price) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
    // calculate total
    calculateTotal();
}

function getInputValue(product) {
    const productInput = document.getElementById(memoryBtnOne);
    const productNumber = parseFloat(productInput.value);
    return productNumber;
    
}



// ===================
function calculateTotal() {
    const phoneTotal = document.getElementById('minimumPrice');
    const caseTotal = updateProductNumber('case');
    const subTotal = phoneTotal + caseTotal;
    document.getElementById('totalPrice').innerText = subTotal;
}


// handle Memory events
document.getElementById('memoryBtnOne').addEventListener('click', function () {
    updateProductNumber('case', 0 );
});

document.getElementById('memoryBtnTwo').addEventListener('click', function(){
    updateProductNumber('case', 180 );
    
});

