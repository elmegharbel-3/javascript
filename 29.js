/* DOM Challeng */
/* Start Header */
//creation
let myHeader = document.createElement("div");
document.body.appendChild(myHeader);
let logo = document.createElement("span");
let logoText = document.createTextNode("Elzero");
logo.appendChild(logoText);
myHeader.appendChild(logo);
let navBar = document.createElement("ul");
let listHome = document.createElement("li");
listHome.innerHTML = "Home";
let listAbout = document.createElement("li");
listAbout.innerHTML = "About";
let listService = document.createElement("li");
listService.innerHTML = "Service";
let listContact = document.createElement("li");
listContact.innerHTML = "Contact";
let navIcons = [listAbout, listHome, listService, listContact];
for (let i = 0; i < navIcons.length; i++) {
  navBar.appendChild(navIcons[i]);
}
myHeader.appendChild(navBar);
logo.className = "logo";
// class and id
myHeader.className = "header";
logo.className = "logo";
navBar.className = "nav";
for (let i = 0; i < navIcons.length; i++) {
  navIcons[i].className = "icon";
}
// styling
document.body.style.margin = "0";
myHeader.style.cssText =
  "display: flex; justify-content: space-between; padding:15px 10px; background-color: #3F77BF; color: white;";
navBar.style.cssText =
  "list-style: none; display: flex; margin: 0;padding: 0; gap:10px";
logo.style.cssText = "font-size: 18px; font-weight: bold";
/* End Header */
/* Start Content */
//Creating
let content = document.createElement("div");
for (let i = 1; i <= 15; i++) {
  let product = document.createElement("div");
  let pHead = document.createElement("h3");
  pHead.innerHTML = `${i}`;
  let pDesc = document.createElement("span");
  pDesc.innerHTML = "Product";
  product.appendChild(pHead);
  product.appendChild(pDesc);
  product.className = "product";
  content.appendChild(product);
}
document.body.appendChild(content);
// Class and Id

// Styling
content.style.cssText =
  "display: flex; flex-wrap: wrap; justify-content: center; background-color: #223459; color: #223459; gap: 30px; padding:20px";
document
  .querySelectorAll(".product")
  .forEach(
    (e) =>
      (e.style.cssText =
        "flex-basis: 350px;  text-align: center;background-color: #3F77BF; padding: 20px")
  );

/* End Content */
