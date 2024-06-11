function sayHello(theName, theGender = 'un') {
    theGender === "Male"
        ? console.log(`Hello Mr. ${theName}`)
        : theGender === "Female"
            ? console.log(`Hello Miss ${theName}`) 
            : console.log(`Hello ${theName}`)
}
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"

function calculate(num1, num2, meth = 'add') {
    num2 === undefined
        ? console.log('Second Number Not Found')
        :meth === 'add'
            ? console.log(num1 + num2)
            : meth === 'subtract' 
                ? console.log(num1 - num2)
                : console.log(num1 * num2)
}
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, 'add'); // 50
calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600

function ageInTime(theAge) {
    theAge > 100 || theAge < 10
        ? console.log('Age Out Of Range')
        : console.log(`Months Example => ${theAge * 12}`);
}
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months

function creatSelectBox(start, end) {
    document.write('<select class = "years">')
    for (let i = start; i <= end; i++) {
        document.write(`<option value = "${i}">${i}</option>`)
    }
    document.write('</select>')
}
creatSelectBox(2007, 2024)

function mu(...nums) {
    let result = 1;
    for (let i = 0; i <= nums.length; i++) {
        if (typeof nums[i] === 'number') {
            if (nums[i] % 1 !== 0 ) {
            result *= parseInt(nums[i])
            }
            else {
                result *= nums[i]
            }
        } 
    }
    console.log(result)
}
mu(10, 20); // 200
mu("A", 10, 30); // 300
mu(100.5, 10, "B"); // 1000
