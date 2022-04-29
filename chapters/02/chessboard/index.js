// Chapter 2
// Chessboard
// https://eloquentjavascript.net/02_program_structure.html#i_swb9JBtSQQ

const chessboard = (num) => {
    for(let i = 1; i <= num; i++) {
        if(i % 2 === 0) {
            let evenRow = ''
            for(let j = 1; j <= num; j++) {
                // even row columns
                if(j % 2 === 0) {
                    evenRow += '#'
                } else {
                    evenRow +=' '
                }
            }
            console.log(evenRow)
        } else {
            let oddRow = ''
            for(let j = 1; j <= num; j++) {
                // odd row columns
                if(j % 2 !== 0) {
                    oddRow += '#'
                } else {
                    oddRow +=' '
                }
            }
            console.log(oddRow)
        }
    }
}