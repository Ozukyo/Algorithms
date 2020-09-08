function binarySearch(inputArr, v) {
    var arr = inputArr.sort();
    var copy = arr.slice();
    var low = 0;
    var mid = Math.floor(low + (arr.length - 1 - low) / 2);
    var isSearching = true;
    while (isSearching) {
        var i = 1;
        var j = 1;
        if (arr[mid] < v) {
            arr = arr.slice(mid + 1);
            low = mid + i;
            mid = Math.floor(low + (arr.length - 1 - low) / 2);
            i++;
        }
        else if (arr[mid] > v) {
            arr = arr.slice(0, mid);
            low = mid - j;
            mid = Math.floor(low + (arr.length - 1 - low) / 2);
            j++;
        }
        else if (arr[mid] === v) {
            isSearching = false;
        }
    }
    return copy.indexOf(arr[mid]);
}
console.log(binarySearch([10, 19, 14, 26, 27, 31, 35, 33, 42, 44], 3));
