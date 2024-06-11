/* window.alert("hello from JS File"); */
document.write("<h1>Elzero</h1>");
document.querySelector("h1").style.color = "blue";
document.querySelector("h1").style.fontSize = "80px";
document.querySelector("h1").style.fontWeight = "bold";
document.querySelector("h1").style.textAlign = "center";
document.querySelector("h1").style.fontFamily = "Arial";

console.info("%celzero %cweb %cschool","color: red; font-size: 40px; letter-spacing: 10px; text-transform: capitalize;","color: green; font-size: 40px; text-transform: capitalize; font-weight: bold;","color: white; font-size: 40px; background-color: blue;")

console.group("Group 1")
console.info("message one")
console.info("message two")
console.group('child group')
console.info("message one")
console.info("message two")
console.group('grand child group')
console.info("message one")
console.info("message two")
console.groupEnd()
console.groupEnd()
console.groupEnd()
console.group("Group 2")
console.info("message one")
console.info("message two")

console.table(["Elzero","Ahmed","Samed","Gamal","Aya"])

// console.log("Iam In Console");
// document.write("Iam In Page");
