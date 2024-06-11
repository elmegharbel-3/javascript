let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia","Anwar","Marwan"]

document.write(`<div>We Have ${myAdmins.length} Admins</div>`);
document.write(`<div>We Have ${myEmployees.length} Employees</div>`);
document.write("<hr></hr>")
for (let i = 0; i < myAdmins.length; i++) {
    document.write("<div>")
    document.write(`<div>The Admin For Team ${i + 1} Is ${myAdmins[i]}</div>`);
    document.write("<h2>Team Members</h2>")
    let c = 1
    for (let j = 0; j < myEmployees.length; j++) {
        if (myEmployees[j][0] === myAdmins[i][0]) {
            document.write(`<p>- ${c} ${myEmployees[j]}</p>`)
            c++;
        }
    }
    document.write("</div>")
    document.write("<hr></hr>")
}