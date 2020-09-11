function generateRandomGrid() {
    var arr = [];
    var width = Math.floor(Math.random() * ((20 - 3 + 1) / 2) + 3) * 2;
    var height = Math.floor(Math.random() * ((15 - 3 + 1) / 2) + 3) * 2;
    var mineOrDot = ".*";
    var gridLook = "";
    for (var i = 0; i < width; i++) {
        arr[i] = [];
        for (var j = 0; j < height; j++) {
            arr[i][j] = mineOrDot.charAt(Math.floor(Math.random() * mineOrDot.length));
            gridLook += arr[i][j] + " ";
        }
        gridLook += "\n";
    }
    console.log(gridLook);
    return arr;
}
console.log(generateRandomGrid());
