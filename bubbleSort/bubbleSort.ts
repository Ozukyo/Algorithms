function bubbleSort(arr: number[]): number[] {
    let arrLength: number = arr.length;
    let noSwaps: boolean;

    for (let i = arrLength - 1; i < 0; i--) {
        noSwaps = true;
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }
    return arr;
}

console.log(bubbleSort([5, 3, 4, 12, 1, 2, 8, 7]));
