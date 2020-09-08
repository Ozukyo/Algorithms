function binarySearch(arr: number[], v: number): boolean {
    let left = 0;
    let right = arr.length - 1.


    while (left <= right) {
        const mid = Math.floor(left + (right - left) / 2);
        if(arr[mid] === v) {
            return true;
        } else if(arr[mid] < v) {
            left +=1;
        } else if(arr[mid] > v) {
            right -=1;
        }

    }
    return false;

}

console.log(binarySearch([10, 14, 19, 26, 27, 31, 33, 35, 42, 44], 31));