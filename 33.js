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

let divCounter = document.createElement("div");
document.body.appendChild(divCounter);
let time = document.createElement("span");
divCounter.appendChild(time);
time.innerHTML = 10;
let countDown = function () {
  time.innerHTML--;
  if (time.innerHTML === "0") {
    clearInterval(counter);
    window.open(
      "https://google.com",
      "_blank",
      "width=600,height=600,left=200,top=300"
    );
  }
};

let counter = setInterval(countDown, 500);
