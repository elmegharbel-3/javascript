/* let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";
let solution = myString
  .split(",")
  .filter(function (ele) {
    return isNaN(parseInt(ele));
  })
  .map(function (ele) {
    return ele.length > +true ? ele[0] : ele;
  })
  .reduce(function (acc, cur) {
    return `${acc}${cur}`;
  });

console.log(solution); */
let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

let solution = myString
  .split(",")
  .slice(0, -1)
  .filter(function (ele) {
    //-true
    return isNaN(parseInt(ele));
  })
  .map(function (ele) {
    return ele.length !== +true ? ele.split("").pop() : ele;
  })
  .join("")
  .split("_");
/* .reduce(function (acc, cur) {
    return `${acc} ${cur}`;
  }); */
console.log(solution);
console.log(myString.indexOf());
