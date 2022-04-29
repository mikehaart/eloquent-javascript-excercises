// Chapter 3
// Bean Counting
// https://eloquentjavascript.net/03_functions.html#i_3rsiDgC2do

const countBs = (str) => {
    let count = 0;
    for(let i = 0; i < str.length; i++) {
        str[i] === 'B' ? count++ : null;
    };
    return count;
};

// console.log(countBs("peBkac"))

const countChar = (str, char) => {
    let count = 0;
    for(let i = 0; i < str.length; i++) {
        str[i] === char ? count++ : null;
    };
    return count;
}

console.log(countChar("bingo bango bongo", "n"))