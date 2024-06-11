let start1 = 10;
let end1 = 100;
let exclude1 = 40;
for (let i = start1; i <= end1; i += 10) {
    if (i == exclude1) continue;
    console.log(i);
} 
let start2 = 10;
let end2 = 0;
let stop2 = 3;
for (let i = start2; i >= end2; i--){
    
    if (i === start2) {
        console.log(i);
    }
    else {
        console.log(`${end2}${i}`);
    }
    if (i == stop2) break;
} 
let start3 = 1;
let end3 = 6;
let breaker3 = 2;
for (let i = start3; i <= end3; i++) {
    console.log(i);
    for (let j = breaker3; j < end3; j += breaker3) {
        console.log(`-- ${j}`)
    }
} 
let index4 = 10;
let jump4 = 2;

for (let i = index4; i > jump4; i -= jump4) {
    console.log(i);
} 
let friends5 = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter5 = "a";
let num5 = letter5.length
for (let i = 0; i < friends5.length;) {
    if (friends5[i][0].toLowerCase() == letter5) {
        i++;
        continue
    };
    console.log(`${num5} => ${friends5[i]}`);
    num5++;
    i++;
} 
let start6 = 0;
let swappedName = "elZerO";
let newName = ""
for (let i = start6; i < swappedName.length; i++) {
    if (swappedName[i] == swappedName[i].toUpperCase()) {
        newName += swappedName[i].toLowerCase();
    }
    else {
        newName += swappedName[i].toUpperCase();
    }
}
console.log(newName) 

let start7 = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];
for (let i = start7; i < mix.length; i++) {
    if (typeof mix[i] == "string") continue;
    else if (mix[i] == true) continue;
    else {
        console.log(mix[i])
    }
}

// Output
2
3
4

let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;

while (counter < friends.length) {
    if (typeof friends[index] == "string" && friends[index][+false] !== friends[+false][+false]) {
        counter += +true;
        console.log(`${counter} => ${friends[index]}`);
    }
    index++;
}