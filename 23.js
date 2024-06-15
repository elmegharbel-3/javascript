/* Assignment 1 */
let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
let letters = mix
  .map(function (ele) {
    return isNaN(parseInt(ele)) == true ? ele : "";
  })
  .reduce(function (acc, cur) {
    return `${acc}${cur}`;
  });
console.log(letters);
/* Assignment 2 */
let myString = "EElllzzzzzzzero";
let newString = myString.split("").filter(function (ele, index) {
  return ele !== myString.split("")[index+1];
});
console.log(newString.join(""));
/* Assignment 3 */
let myArray = ["E", "l", "z", ["e", "r"], "o"];
let flatArray = myArray.reduce(function (acc, cur) {
  console.log(`Accumalate ${acc}`)
  console.log(`Current ${cur}`)
  return acc.concat(cur)
}, []).join("");
console.log(flatArray);
/* Assignment 4 */
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
let nums = numsAndStrings.filter(function (ele) {
  return isNaN(parseInt(ele)) == false;
}).map(function (num) {
  return -num;
})
console.log(nums)
/* Assignment 5 */
let myNums = [2, 12, 11, 5, 10, 1, 99];
let result = myNums.reduce(function(acc, cur) {
  return cur % 2 == 0 ? acc * cur : acc + cur;
})
console.log(result)

