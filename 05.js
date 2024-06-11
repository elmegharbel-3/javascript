let a = 10
let b = "20"
let c = 80

console.log(++a + +b++ + +c++ - +a++) /* 11 + 21 + 81 - 11 = 100*/
console.log(++a + -b + +c++ - -a++ + +a) /* 11 - 20 + 80 + 11 + 12 */
console.log(--c + +b + --a * +b++ - +b++ - +b * a + --a - +true)/* 79 + 20 + 9 * 20 - 21 - 22 * 9 -8 */

let d = "100"
let e = "20"
let f = 30 
let g = true

console.log(+d * +e)
console.log(+d + f + +e + +e + +g + ++g )