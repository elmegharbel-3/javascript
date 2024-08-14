let add = document.querySelector(".classes-to-add");
console.log(add);
let remove = document.querySelector(".classes-to-remove");
let element = document.querySelector("[title = Current]");
console.log(element);
let classesShown = document.querySelector(".classes-list").querySelector("div");
console.log(classesShown);

let showClasses = function (ele, result) {
  if (ele.classList.value === "") {
    result.innerHTML = "No Classes To Show";
  } else {
    for (let i = 0; i < ele.classList.length; i++) {
      classTag = document.createElement("span");
      classTag.innerHTML = ele.classList[i];
      result.appendChild(classTag);
    }
  }
};
showClasses(element, classesShown);

add.onblur = function (e) {
  let addList = add.value.split(" ");
  element.classList.add(...addList);
  add.value = "";
  classesShown.innerHTML = "";
  showClasses(element, classesShown);
};
remove.onblur = function (e) {
  let removeList = remove.value.split(" ");
  element.classList.remove(...removeList);
  e.preventDefault();
  remove.value = "";
  classesShown.innerHTML = "";
  showClasses(element, classesShown);
};
