function generateRandomGrid(): string[][] {
    let arr: string[][] = [];
    let width: number = Math.floor(Math.random() * ((20 - 3 + 1)/2) + 3)*2;
    let height: number = Math.floor(Math.random() * ((15 - 3 + 1)/2) + 3)*2;
    let mineOrDot: string = ".*";
    let gridLook: string = ""

    for (let i = 0; i < width; i++) {
        arr[i] = [];
        for (let j = 0; j < height; j++) {
            arr[i][j] = mineOrDot.charAt(Math.floor(Math.random() * mineOrDot.length));
            gridLook += arr[i][j] + " ";
        }
        gridLook += "\n";
    }
    console.log(gridLook);
    return arr;
}

console.log(generateRandomGrid());