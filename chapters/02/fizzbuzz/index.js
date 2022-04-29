// Chapter 2
// Fizzbuzz
// https://eloquentjavascript.net/02_program_structure.html#i_rebKE3gdjV

const fizzBuzz = (limit) => {
    for(let i = 1; i <= limit; i++) {
        if(i % 3 === 0 && i % 5 === 0) {
            console.log(`(${i}) FizzBuzz`)
        } else if (i % 3 === 0) {
            console.log(`(${i}) Fizz`)
        } else if (i % 5 === 0) {
            console.log(`(${i}) Buzz`)
        }
    }
}

