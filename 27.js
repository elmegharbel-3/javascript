for (let i = 0; i < 10; i++) {
  let myDiv = document.getElementsByTagName("div")[i];
  console.log(myDiv);
  let myImg = myDiv.getElementsByTagName("img")[0];
  console.log(myImg);
  myImg.setAttribute(
    "src",
    "https://elzero.org/wp-content/themes/elzero/imgs/logo.png"
  );
  myImg.setAttribute("alt", "Elzero Logo");
}
