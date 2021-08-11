
function deliveryCost(tShirt) {

    if (tShirt <= 100) {
        var perCost = 100;
        var totalCost = tShirt * perCost;
    return totalCost;
}
    else if (tShirt > 100 && tShirt <= 200) {
        var perCost2 = 80;
        var totalCost2 = tShirt * perCost2;
        var newPrice = (10000 + totalCost2) - 8000;
    return newPrice;
}
    else {
        var perCost3 = 50;
        var totalCost3 = tShirt * perCost3;
        var newPrice2 = (18000 + totalCost3) - 10000;
    return newPrice2;
  }
}

console.log('Delivery Cost:',deliveryCost(101));
