let para = document.querySelector("p");
para.remove();
let main = document.querySelector(".our-element");
let before = document.createElement("div");
before.className = "start";
before.title = "Start Element";
before.setAttribute("data-value", "Start");
main.before(before);

let after = document.createElement("div");
after.className = "end";
after.title = "end Element";
after.setAttribute("data-value", "end");
main.after(after);

let theDiv = document.querySelector(".zero");
console.log(theDiv.lastChild);
console.log(theDiv.tagName);
