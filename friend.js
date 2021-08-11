function perfectFriend(arr) {
    var large = arr[0];
    for (var i = 0; i < arr.length; i++){
        var item = arr[i];
        if (large.length < item.length) {
            large = item;
        }
    }
    return large;
}
console.log(perfectFriend(['Emon', 'Sumon', 'Remon', 'Rukon']));