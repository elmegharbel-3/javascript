let text = document.querySelector("input[type=text");
let add = document.querySelector("input[type=submit]");
let list = document.querySelector(".task-list");
let newArray = [] 
function show() {
  if (window.localStorage.task) {
    newArray = JSON.parse(window.localStorage.task)
    newArray.forEach((e) => {
      let myDiv = document.createElement("div");
      list.appendChild(myDiv);
      myDiv.id = e.id;
      myDiv.textContent = e.title;
      let btn = document.createElement("button");
      myDiv.append(btn);
      btn.onclick = function (e) {
        newArray = newArray.filter()
      }
  })
  }
}
