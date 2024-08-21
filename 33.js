//let answer = prompt("Print number from-to");
/* let twoNumbers = answer
  .split("-")
  .sort((a, b) => a - b)
  .map(Number);
console.log(twoNumbers);
for (let i = twoNumbers[0]; i <= twoNumbers[1]; i++) {
  console.log(i);
} */
let popUp = document.querySelector(".pop-up");
console.log(popUp);
let btn = popUp.querySelector("button");
setTimeout(function () {
  popUp.style.display = "block";
}, 5000);
btn.onclick = () => (popUp.style.display = "none");
