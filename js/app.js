


function memoryCost(isIncrease){
    if(isIncrease){
        const memoryPriceTwo = document.getElementById('memoryCost').innerText = 180;
        return memoryPriceTwo;
    }
    else{
        const memmoryPriceOne = document.getElementById('memoryCost').innerText = 0;
        return memmoryPriceOne; 
    }
}

// Handle Memory Costing
const memoryEightGb = document.getElementById('memoryBtnOne');
memoryEightGb.addEventListener('click', function(){
    memoryCost(false);
    const bestPrice = document.getElementById('minimumPrice');
    let bestPriceText = bestPrice.innerText;
    const bestPriceNumber = parseFloat(bestPriceText);

    const totalPriceNumber = document.getElementById('totalPrice');
    const newTotalPrice = bestPriceNumber + 0;
    totalPriceNumber.innerText = newTotalPrice;
});

const memoryFhSixteenGb = document.getElementById('memoryBtnTwo');
memoryFhSixteenGb.addEventListener('click', function(){
    memoryCost(true);
    const bestPrice = document.getElementById('minimumPrice');
    let bestPriceText = bestPrice.innerText;
    const bestPriceNumber = parseFloat(bestPriceText);

    const totalPriceNumber = document.getElementById('totalPrice');
    const newTotalPrice = bestPriceNumber + 180;
    totalPriceNumber.innerText = newTotalPrice;
});





function storageCost(isIncrease){
    if(isIncrease){
        const storagePriceThree = document.getElementById('storageCost').innerText = 180;
        return storagePriceThree;
    }
    if(isIncrease){
        const storagePriceTwo = document.getElementById('storageCost').innerText = 100;
        return storagePriceTwo;
    }
    else{
        const storagePriceOne = document.getElementById('storageCost').innerText = 0;
        return storagePriceOne; 
    }
}

// Handle Storage Costing
const storageThfSixGb = document.getElementById('storageBtnOne');
storageThfSixGb.addEventListener('click', function(){
    storageCost(false);
    const bestPrice = document.getElementById('minimumPrice');
    let bestPriceText = bestPrice.innerText;
    const bestPriceNumber = parseFloat(bestPriceText);

    const totalPriceNumber = document.getElementById('totalPrice');
    const newTotalPrice = bestPriceNumber + 0;
    totalPriceNumber.innerText = newTotalPrice;
    console.log(totalPriceNumber);
});


const storageFhTwelveGb = document.getElementById('storageBtnTwo');
storageFhTwelveGb.addEventListener('click', function(){
    storageCost(true);
    const bestPrice = document.getElementById('minimumPrice');
    let bestPriceText = bestPrice.innerText;
    const bestPriceNumber = parseFloat(bestPriceText);

    const totalPriceNumberThree = document.getElementById('totalPrice');
    const newTotalPrice = bestPriceNumber + 100;
    totalPriceNumberThree.innerText = newTotalPrice;
    console.log(totalPriceNumberThree);
});


const storageOneTb = document.getElementById('storageBtnThree');
storageOneTb.addEventListener('click', function(){
    storageCost(true);
    const bestPrice = document.getElementById('minimumPrice');
    let bestPriceText = bestPrice.innerText;
    const bestPriceNumber = parseFloat(bestPriceText);

    const totalPriceNumber = document.getElementById('totalPrice');
    const newTotalPrice = bestPriceNumber + 180;
    totalPriceNumber.innerText = newTotalPrice;
    console.log(totalPriceNumber);
});
