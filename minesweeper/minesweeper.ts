function generateRandomGrid(): string[][] {
    let arr: string[][] = [];
    let width: number = Math.floor(Math.random() * ((20 - 3 + 1) / 2) + 3) * 2;
    let height: number = Math.floor(Math.random() * ((15 - 3 + 1) / 2) + 3) * 2;
    let mineOrDot: string = ".*";
    let gridLook: string = "";

    for (let i = 0; i < height; i++) {
        arr[i] = [];
        for (let j = 0; j < width; j++) {
            arr[i][j] = mineOrDot.charAt(Math.floor(Math.random() * mineOrDot.length));
            gridLook += arr[i][j] + " ";
        }
        gridLook += "\n";
    }
    console.log(gridLook);
    return arr;
}

function fillGridWithNumbers(grid: string[][]): any {
    let gridLook: string = "";

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === ".") {
                checkAllBombPositions(grid, i, j);
            }
            gridLook += grid[i][j] + " ";
        }
        gridLook += "\n";
    }
    console.log(gridLook);
    return grid;
}

function checkAllBombPositions(grid: string[][], i: number, j: number): void {
    let bombCounter: number = 0;

    for (let iToAdd = -1; iToAdd <= 1; iToAdd++) {
        for (let jToAdd = -1; jToAdd <= 1; jToAdd++) {
            if ((iToAdd === 0 && jToAdd === 0) || i+iToAdd < 0 || i+iToAdd >= grid.length || j+jToAdd < 0 || j+jToAdd>=grid[0].length) {
                continue;
            }
            if (grid[i + iToAdd][j - jToAdd] !== undefined && grid[i + iToAdd][j - jToAdd] === "*") bombCounter += 1;
            grid[i][j] = bombCounter.toString();
        }
    }
}

fillGridWithNumbers(generateRandomGrid());