// Chapter 2
// Looping a triangle
// https://eloquentjavascript.net/02_program_structure.html#i_umoXp9u0e7

const treeLoop = (size) => {
    let hashCount = '';
    for(let i = 0; i < size; i++) {
        hashCount += '#'
        console.log(hashCount);
    }
}