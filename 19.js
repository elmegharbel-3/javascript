/* let names = function (...titles) {
    return `String [${titles.join('], [')}] => Done !`;
} */
let names = (...titles) => `String [${titles.join('], [')}] => Done !`

console.log(names("Marwan", "Youssef", "Ashraf", "Mervat"))


let myNumbers = [20, 50, 10, 60];

let calc = function (one, two, ...nums) {
    return one + two + nums[+false]
}

console.log(calc(10, myNumbers[+false], myNumbers[+true]))

function getDetails(iname, iage, icountry) {
    function namePattern(name) {
        name = name.slice(0, name.indexOf(' ') + 2) + '.'
        return name.slice(0,-2) + name.slice(-2).toUpperCase()
    }
    function ageWithMessage(age) { 
        return 'Your Age Is ' + age.slice(0,2)
    }
    function countryTwoLetters(country) {
        return country.slice(0,2).toUpperCase()
    }
    function fullDetails() {
        return `Hello ${namePattern(iname)}, ${ageWithMessage(iage)}, You Live In ${countryTwoLetters(icountry)}`
    }
    return fullDetails()
}
console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
