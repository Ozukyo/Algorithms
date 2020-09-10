function bubbleSort(arr) {
    var _a;
    var arrLength = arr.length;
    for (var i = 0; i < arrLength; i++) {
        for (var j = 0; j < arrLength; j++) {
            if (arr[j] > arr[j + 1]) {
                _a = [arr[j + 1], arr[j]], arr[j] = _a[0], arr[j + 1] = _a[1];
            }
        }
        arrLength--;
    }
    return arr;
}
console.log(bubbleSort([5, 3, 4, 12, 1, 2, 8, 7]));
