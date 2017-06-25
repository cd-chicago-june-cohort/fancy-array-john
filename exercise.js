function makeFancy(arr, symbol, reversed) {
    if (!symbol) {
        symbol = "->";
    }
    if (reversed === true) {
        for (var i = arr.length - 1; i >= 0 ; i--) {
            console.log(i.toString(), symbol, arr[i]);
        }
    } else {
        for (var i = 0; i < arr.length; i++) {
            console.log(i.toString(), symbol, arr[i]);
        }
    }
}

makeFancy(["Jack", "Jill", "Joe", "Mike"], "=>", true);