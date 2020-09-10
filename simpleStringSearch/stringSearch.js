function stringSearch(longer, shorter) {
    var counter = 0;
    for (var i = 0; i < longer.length; i++) {
        for (var j = 0; j < shorter.length; j++) {
            if (shorter.charAt(j) !== longer.charAt(j + i)) {
                break;
            }
            if (j === shorter.length - 1) {
                counter++;
            }
        }
    }
    return counter;
}
console.log(stringSearch("re re kum kum", "kum"));
