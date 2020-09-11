function generateRandomGrid() {
    var arr = [];
    var width = Math.floor(Math.random() * ((20 - 3 + 1) / 2) + 3) * 2;
    var height = Math.floor(Math.random() * ((15 - 3 + 1) / 2) + 3) * 2;
    var mineOrDot = ".*";
    var gridLook = "";
    for (var i = 0; i < height; i++) {
        arr[i] = [];
        for (var j = 0; j < width; j++) {
            arr[i][j] = mineOrDot.charAt(Math.floor(Math.random() * mineOrDot.length));
            gridLook += arr[i][j] + " ";
        }
        gridLook += "\n";
    }
    console.log(gridLook);
    return arr;
}
function fillGridWithNumbers(grid) {
    var bombCounter = 0;
    var gridLook = "";
    for (var i = 0; i < grid.length - 1; i++) {
        for (var j = 0; j < grid.length; j++) {
            if (grid[i][j] === ".") {
                if (grid[i + 1][j] !== undefined && grid[i + 1][j] === "*")
                    bombCounter += 1;
                if (grid[i + 1][j + 1] !== undefined && grid[i + 1][j + 1] === "*")
                    bombCounter += 1;
                if (grid[i][j + 1] !== undefined && grid[i][j + 1] === "*")
                    bombCounter += 1;
                if (grid[i - 1][j] !== undefined && grid[i - 1][j] === "*")
                    bombCounter += 1;
                if (grid[i - 1][j - 1] !== undefined && grid[i - 1][j - 1] === "*")
                    bombCounter += 1;
                if (grid[i][j - 1] !== undefined && grid[i][j - 1] === "*")
                    bombCounter += 1;
                if (grid[i - 1][j + 1] !== undefined && grid[i - 1][j + 1] === "*")
                    bombCounter += 1;
                if (grid[i + 1][j - 1] !== undefined && grid[i + 1][j - 1] === "*")
                    bombCounter += 1;
                grid[i][j] = bombCounter.toString();
                bombCounter = 0;
            }
            gridLook += grid[i][j] + " ";
        }
        gridLook += "\n";
    }
    console.log(gridLook);
    return grid;
}
fillGridWithNumbers(generateRandomGrid());
