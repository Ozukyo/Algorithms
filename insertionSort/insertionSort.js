function insertionSort(arr) {
    var _a;
    for (var i = 1; i < arr.length; i++) {
        for (var j = i; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                _a = [arr[j], arr[j - 1]], arr[j - 1] = _a[0], arr[j] = _a[1];
            }
        }
    }
    console.log(arr);
    return arr;
}
insertionSort([5, 3, 11, 6, 9, 2, 22]);
