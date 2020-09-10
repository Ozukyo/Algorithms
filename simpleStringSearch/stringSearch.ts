function stringSearch(longer: string, shorter: string): number {
    let counter = 0;

    for (let i = 0; i < longer.length; i++) {
        for (let j = 0; j < shorter.length; j++) {
            if (shorter.charAt(j) !== longer.charAt(j + i)) {
                break;
            }

            if (j === shorter.length - 1) {
                counter++
            }
        }
    }
    return counter;
}


console.log(stringSearch("re re kum kum", "kum"));