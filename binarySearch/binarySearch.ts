function binarySearch(inputArr: number[], v: number) {
    let arr = inputArr.sort();
    let copy = arr.slice();
    let low = 0;
    let mid = Math.floor(low + (arr.length - 1 - low) / 2);
    let isSearching = true;

    while (isSearching) {
        let i = 1;
        let j = 1;
        if (arr[mid] < v) {
            arr = arr.slice(mid + 1);
            low = mid + i;
            mid = Math.floor(low + (arr.length - 1 - low) / 2);
            i++;
        } else if (arr[mid] > v) {
            arr = arr.slice(0, mid);
            low = mid - j;
            mid = Math.floor(low + (arr.length - 1 - low) / 2);
            j++;
        } else if (arr[mid] === v) {
            isSearching = false;
        }

    }
    return copy.indexOf(arr[mid]);

}

console.log(binarySearch([10, 19, 14, 26, 27, 31, 35, 33, 42, 44], 3));