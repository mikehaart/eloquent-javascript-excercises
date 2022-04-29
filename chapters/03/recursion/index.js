// Chapter 3
// Recursion
// https://eloquentjavascript.net/03_functions.html#i_jxl1p970Fy

const isEven = (n) => {
    if(n === 0 ) {
        return true
    } else if(n === 1) {
        return false
    } else { return isEven(n-2) }
}

// When n is -1 the call stack is exceeded. This is because the recursive calls keep going trying to reach -1 or 0 but go to negative infinity.
// My fix below increments a positive number when the given n property is positive

const isEvenFix = (n) => {
    if(n === 0 ) {
        return true
    } else if(n === 1) {
        return false
    }
    else if (n > 0) { return isEvenFix(n-2) }
    else { return isEvenFix(n+2) }
}

console.log(isEvenFix(-9))
