function insertionSort(arr: number[]): number[] {
    for (let i = 1; i < arr.length; i++) {
        for (let j = i; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
            }

        }
    }
    console.log(arr);
    return arr;
}

insertionSort([5, 3, 11, 6, 9, 2, 22])
