function doMath(x,znak,y) {
    if(znak !== '^') {
        return eval(x + znak + y);
    } else {
        return x ** y;
    }
}
let znak = '^';

console.log(doMath(4, znak, 3));
document.write(doMath(9, znak, 3));


// function doMath(x,znak,y) {
//     if (znak === '+') {
//         return x + y;
//     }
//     if (znak === '-') {
//     return x - y;
//     }
//     if (znak === '*') {
//     return x * y;
//     }
//     if (znak === '/') {
//     return x / y;
//     }
//     if (znak === '%') {
//     return x % y;
//     }
//     if (znak === '^') {
//     return x ** y;
//     }
// }