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
    var gridLook = "";
    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[0].length; j++) {
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
function checkAllBombPositions(grid, i, j) {
    var bombCounter = 0;
    for (var iToAdd = -1; iToAdd <= 1; iToAdd++) {
        for (var jToAdd = -1; jToAdd <= 1; jToAdd++) {
            if ((iToAdd === 0 && jToAdd === 0) || i + iToAdd < 0 || i + iToAdd >= grid.length || j + jToAdd < 0 || j + jToAdd >= grid[0].length) {
                continue;
            }
            if (grid[i + iToAdd][j - jToAdd] !== undefined && grid[i + iToAdd][j - jToAdd] === "*")
                bombCounter += 1;
            grid[i][j] = bombCounter.toString();
        }
    }
}
fillGridWithNumbers(generateRandomGrid());
