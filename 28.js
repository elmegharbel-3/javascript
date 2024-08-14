let number = document.querySelector("[name = elements]");
let text = document.querySelector("[name = texts]");
let type = document.querySelector("[name = type]");
let submit = document.querySelector("[name = create]");
let result = document.querySelector(".results");
console.log(number.value, text.value, type.value, submit, result);
console.log(submit);
submit.onclick = function (e) {
  result.innerHTML = "";
  for (let i = 1; i <= number.value; i++) {
    if (type.value === "Div") {
      let newDiv = document.createElement("div");
      newDiv.className = "box";
      newDiv.title = "Element";
      let divText = document.createTextNode(text.value);
      newDiv.appendChild(divText);
      newDiv.id = `id-${i}`;
      result.appendChild(newDiv);
    } else {
      let newSection = document.createElement("section");
      newSection.className = "box";
      newSection.title = "Element";
      let secText = document.createTextNode(text.value);
      newSection.appendChild(secText);
      newSection.id = `id-${i}`;
      result.appendChild(newSection);
    }
  }
  e.preventDefault();
};
