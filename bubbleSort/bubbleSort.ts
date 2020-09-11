function bubbleSort(arr: number[]): number[] {
    let arrLength: number = arr.length;
    for (let i = 0; i < arrLength; i++) {
        for (let j = 0; j < arrLength; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
        arrLength--;
    }
    return arr;
}

console.log(bubbleSort([5, 3, 4, 12, 1, 2, 8, 7]));
