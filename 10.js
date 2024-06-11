console.log(10 == '10')// {True} it compares values not data types.
console.log(10 != '10')// {False}

console.log(10 === '10')// {False} it compares values + data types.
console.log(10 !== '10')// {True}

console.log(10 > '5')// {True} it compares values not data types.
console.log(10 > 5)// {True}

console.log("Marwan" === 'Ashraf')// {False}
console.log(typeof "Marwan" === typeof 'Ashraf')// {True}

//----------------------------------------------------------------

console.log(true)
console.log(!true)// {False}
console.log(!(10 == '10'))// {False}

console.log(10 == '10' && 10 > 8 && 10 > 50)// {False} &&  => And

console.log(10 == '10' || 10 > 8 || 10 > 50)// {True} ||  => Or

console.log("----------------------------------------------------------------")
//----------------------------------------------------------------
console.log(100 == "100"); // true
console.log(100 != 1000); // true
console.log(110 > 100 && 10 < 20); // true
console.log(-10 == "-10"); // true
console.log(! (-50 >= +"-40")); // true
console.log(! (10 == -"-40")); // true
console.log(! ("10" === 10)); // true
console.log(!20 == false); // true

console.log("----------------------------------------------------------------")

let num1 = 10;
let num2 = 20;

console.log(num1 != num2); // true
console.log(num1 < num2); // true
console.log(num1 <= num2); // true
console.log(! (num1 == num2)); // true
console.log("Your Code Here"); // true
console.log("Your Code Here"); // true

let a = 20;
let b = 30;
let c = 10;

console.log(a < b && a > c || a == b); // true
console.log(a - b != a - c); // true
console.log(!(a === b) && !(a > b) && !(a === c) && !(a < c)); // true
