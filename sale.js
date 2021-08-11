function totalSales(shirtQuantity, pantQuantity, shoeQuantity) {

    var shirtTotalPrice = shirtQuantity * 100;
    var pantTotalPrice = pantQuantity * 200;
    var shoeTotalPrice = shoeQuantity * 500;
    var totalPrice = shirtTotalPrice + pantTotalPrice + shoeTotalPrice;
    
    return totalPrice;
}
var result = totalSales(10, 10, 2);
console.log('Total Amount:',result);