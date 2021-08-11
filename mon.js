// Problem 1

function seerToMon(seer) {
    var mon = seer/40;           // Calculation
    return mon;
}
    var mySeer = 80;
    var mon = seerToMon(mySeer);     // Function Calling
console.log(mon);


// Problem 2

function totalSales(shirtQuantity, pantQuantity, shoeQuantity) {

    var shirtTotalPrice = shirtQuantity * 100;            
    var pantTotalPrice = pantQuantity * 200;
    var shoeTotalPrice = shoeQuantity * 500;
    var totalPrice = shirtTotalPrice + pantTotalPrice + shoeTotalPrice;     // Calculation
    
    return totalPrice;
}
var result = totalSales(10, 10, 2);         // Function Calling
console.log('Total Amount:', result);


// Problem 3

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
console.log('Delivery Cost:', deliveryCost(101));       // Function Calling and Output


// Problem 4

function perfectFriend(arr) {
    let large = arr[0];                                 //Initial Value of Array
    for (var i = 0; i < arr.length; i++){
        const item = arr[i];
        if (large.length < item.length) {
            large = item;
        }
    }
    return large;                                 // 5 charecter String will Return
}
console.log(perfectFriend(['Emon', 'Sumon', 'Remon', 'Rukon']));       // Function Calling and Output

