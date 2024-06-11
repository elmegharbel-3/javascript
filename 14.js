let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"]

my = my.slice(zero,my.indexOf("Gamal")).reverse()
console.log(my)
console.log(my.slice(my.indexOf("Elham"), counter))
k = my[my.indexOf("Elham")].slice(zero,-counter) + my[my.indexOf("Mazero")].slice(-my.length)
console.log(k)

console.log(my[my.indexOf("Mazero")][my.length] + my[zero][zero])

let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

console.log(myFriends.slice(false, num))
myFriends.pop()
console.log(myFriends)

let friends = ["Ahmed", "Eman", "Osama", "Gamal"];
friends.pop()
friends.shift()
console.log(friends); // ["Eman", "Osama"]

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = arrOne.concat(arrTwo).sort().reverse();

// Write One Single Line Of Code

console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]


let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];


console.log(words.pop()[0].slice(website.length).toUpperCase()); // ZERO


let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

if (haystack.includes(needle) == true) {
    console.log("Found")
}
else {
    console.log("Not Found")
}


let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = arr1.concat(arr2).sort().slice(arr2.length).join("").toLowerCase();

// Your Code Here

console.log(allArrs); // fxy