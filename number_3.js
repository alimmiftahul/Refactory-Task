function printTriangle(num) {
    let row;
    for (let i = 1; i <= num; i++) {
        row = "";
        for (let j = 1; j <= i; j++) {
            row += "*";
        }
        console.log(row);
    }
}

printTriangle(5);
