let numbers = [11, 20, 2, 5, 17, 10];

let friends = ["Ahmed", "Sameh", "Sayed", "Asmaa", "Amgad", "Israa"];

let addMap = numbers.map(function (el) {
  return el + el;
});
console.log(addMap);
let friendsFilter = friends.filter(function (el) {
  return el[0] === "A";
});
console.log(friendsFilter);

let sentence = "I Love Foood Code Too Playing Much";
let smallWords = sentence
  .split(" ")
  .filter(function (el) {
    return el.length < 5;
  })
  .join(" ");
console.log(smallWords);

let ignoreNumbers = "Elz123er4o"
  .split("")
  .filter(function (el) {
    return isNaN(parseInt(el));
  })
  .join("");
console.log(ignoreNumbers);

let mix = "A13BS2ZX";

let mixedContent = mix
  .split("")
  .filter(function (ele) {
    return !isNaN(parseInt(ele));
  })
  .map(function (ele) {
    return ele * ele;
  })
  .join("");

console.log(mixedContent);
/* Reduce Fucntion */
let nums = [10, 20, 15, 30];

let add = nums.reduce(function (accumalate, current, index, array) {
  console.log(`accumalate => ${accumalate}`);
  console.log(`current => ${current}`);
  console.log(`index => ${index}`);
  console.log(`array => ${array}`);
  console.log(accumalate * current);
  console.log("#".repeat(12));
  return accumalate * current;
}, 1);
console.log(add);
