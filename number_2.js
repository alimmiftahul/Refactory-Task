function fizzBuzzGenerator(num) {
    let i;
    let word;
    for (i = 1; i < num; i++) {
        if (i % 5 === 0) {
            word = "fizz";
            console.log(`${i} = ${word}`);
        }
        if (i % 3 === 0) {
            // console.log(i);
            word = "buzz";
            console.log(`${i} = ${word}`);
        }
        if (i % 3 === 0 && i % 5 === 0) {
            word = "fizzBuzz";
            console.log(`${i} = ${word}`);
        }
    }
}

fizzBuzzGenerator(50);
