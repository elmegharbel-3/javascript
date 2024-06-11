console.log(100000)
console.log(100_000)
console.log(1e5)
console.log(+"100000")
console.log(+"1e5")
console.log(10**5)
console.log(5e4 + 5e4)
console.log(1e10 / 1e5)
console.log()
console.log()
console.log()
console.log()
console.log()

console.log((Number.MIN_SAFE_INTEGER) * -1)
console.log(((Number.MAX_SAFE_INTEGER).toString().length))

let myVar = "100.56789 Views";

console.log(Math.trunc(parseInt(myVar)));
console.log(+parseFloat(myVar).toFixed(2));

let num = 10;

console.log(+Number.isInteger(num) * 2); 

let flt = 10.4;

console.log(+flt.toFixed(0)); // 10
console.log(parseInt(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(Math.round(flt)); // 10

console.log(parseInt(Math.random()*5))