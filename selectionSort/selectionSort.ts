function selectionSort(arr: number[]): number[] {
    for (let i = 0; i < arr.length; i++) {
        let min: number = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        if (i !== min) {
            [arr[i], arr[min]] = [arr[min], arr[i]];
        }
    }
    console.log(arr);
    return arr;
}

selectionSort([0, 5, 3, 4, 12, 1, 2, 8, 7]);