let price = 100;
let discount = false;
let discountAmount = 30;
let country = "Egypt";
let student = true;
console.log(price)
if (discount === true) {
    price -= discountAmount;
} else if (country === "Egypt") {
    price -= discountAmount + 10;
    if (student === true) {
        price -= discountAmount + 30;
    }
    else {
        price -= discountAmount + 10;
    }
} else {
    price -= 10;
}
console.log(price)

let theName = "Ahmed";
let theGender = "Male";
let theAge = 62;

theGender === "Male" ? console.log("Mr") : console.log("Mrs");
let cond = theGender === "Male" ? "Mr" : "Mrs";

document.write(cond)
console.log(`Hello ${cond} ${theName}`)

/* theAge < 20
    ? console.log(20)
    : theAge > 20 && theAge < 60
    ? console.log("20 To 60")
    : theAge > 60 
    ? console.log("Larger than 60")
    : console.log("Unknown")  */       
    
if (theAge < 20) {
    console.log(20)
} else if (theAge > 20 && theAge < 60) {
    console.log("20 To 60")
} else if (theAge > 60) {
    console.log("Larger than 60")
} else {
    console.log("Unknown")
}

let a = "Maro";

a < 10
    ? console.log(10)
    : a >= 10 && a <= 40
    ? console.log("10 To 40")
    : a > 40 
    ? console.log("> 40")
    : console.log("Unknown")        
    
let st = "Elzero Web School";

// W Position May Change
if (st[st.indexOf("W")].toLowerCase() === "w") {
    console.log("Good1");
}

if (st !== "string") {
    console.log("Good2");
}

if (typeof parseInt(st) === "number") {
    console.log("Good3");
}

if (st.slice(0,6).repeat(2) === "ElzeroElzero") {
    console.log("Good4");
}    
