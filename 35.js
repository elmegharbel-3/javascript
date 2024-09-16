let fontSizeValue = document.querySelector("#slide-value");
let fontSize = document.querySelector("#font-size");
let color = document.querySelector("#color");
let font = document.querySelector("#fonts");
/* display slider value */

/* Store values in local storage */
change();
fontSizeValue.innerHTML = fontSize.value;
fontSize.oninput = () => {
  fontSizeValue.innerHTML = fontSize.value;
  console.log(fontSize.value);
};
font.onchange = () => {
  window.localStorage.setItem(font.id, font.value);
  change();
};
document.querySelectorAll(".opt").forEach((e) => {
  e.oninput = () => {
    window.localStorage.setItem(e.id, e.value);
    change();
    if (e.id === "font-size") {
      fontSizeValue.innerHTML = e.value;
    }
  };
});
/* Set Values */
function change() {
  document.body.style.fontSize = window.localStorage.getItem(fontSize.id);
  fontSize.value = window.localStorage.getItem(fontSize.id);
  document.body.style.color = window.localStorage.getItem(color.id);
  color.value = window.localStorage.getItem(color.id);
  document.body.style.fontFamily = window.localStorage.getItem(font.id);
  font.value = window.localStorage.getItem(font.id);
}
