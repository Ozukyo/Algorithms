function selectionSort(arr) {
    var _a;
    for (var i = 0; i < arr.length; i++) {
        var min = i;
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        if (i !== min) {
            _a = [arr[min], arr[i]], arr[i] = _a[0], arr[min] = _a[1];
        }
    }
    console.log(arr);
    return arr;
}
selectionSort([0, 5, 3, 4, 12, 1, 2, 8, 7]);
