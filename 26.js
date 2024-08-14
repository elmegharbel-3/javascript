/* 1 */
let select1 = document.getElementById("elzero");
/* 2 */
let select2 = document.getElementsByClassName("element");
/* 3 */
let select3 = document.getElementsByTagName("div");
/* 4 */
let select4 = document.getElementsByName("js");
/* 5 */
let select5 = document.body.firstElementChild;
/* 6 */
let select6 = document.body.childNodes[1];
/* 7 */
let select7 = document.querySelector("#elzero");
/* 8 */
let select8 = document.querySelector(".element");
/* 9 */
let select9 = document.querySelector("div");
/* 10 */
let select10 = document.querySelector("[name = js]");
/* 11 */
let select11 = document.querySelectorAll("#elzero");
/* 12*/
let select12 = document.querySelectorAll(".element");
/* 13*/
let select13 = document.querySelectorAll("div");
/* 14*/
let select14 = document.querySelectorAll("[name = js]");
/* 15*/
let select15 = document.body.children[0];

console.log(select1);
console.log(select2);
console.log(select3);
console.log(select4);
console.log(select5);
console.log(select6);
console.log(select7);
console.log(select8);
console.log(select9);
console.log(select10);
console.log(select11);
console.log(select12);
console.log(select13);
console.log(select14);
console.log(select15);

let result = document.forms[0].getElementsByTagName("input")[0];
let myDiv = document.forms[0].getElementsByTagName("div")[0];
result.oninput = function () {
  return (myDiv.innerHTML = `{${result.value}} USD Dollar = {${(
    result.value * 15.6
  ).toFixed(2)}} Egyptian Pound `);
};

let div1 = document.querySelector(".one");
let div2 = document.querySelector(".two");

div1.title = div1.className;
div2.title = div2.className;

div1.innerHTML = div1.className;
div2.innerHTML = `${div2.className} ${div2.attributes.length}`;
