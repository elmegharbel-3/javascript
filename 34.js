let text = document.querySelector("input[type=text");
let add = document.querySelector("input[type=submit]");
let list = document.querySelector(".task-list");
let newArray = [];
function show() {
  if (window.localStorage.task) {
    newArray = JSON.parse(window.localStorage.task);
    list.innerHTML = "";
    newArray.forEach((e) => {
      let myDiv = document.createElement("div");
      list.append(myDiv);
      myDiv.id = e.id;
      myDiv.textContent = e.title;
      let btn = document.createElement("button");
      myDiv.append(btn);
      btn.textContent = "Delete";
      btn.onclick = function (e) {
        newArray = newArray.filter((ele) => {
          return ele.id != e.currentTarget.parentElement.id;
        });
        e.currentTarget.parentElement.remove();
        window.localStorage.setItem("task", JSON.stringify(newArray));
      };
    });
  }
}
show();
add.onclick = function () {
  if (text.value.length) {
    let obj = {
      id: Date.now(),
      title: text.value,
    };
    newArray.push(obj);
    window.localStorage.setItem("task", JSON.stringify(newArray));
    text.value = "";
    show();
  }
};
