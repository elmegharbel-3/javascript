function showDetails(a, b, c) {
    let name, num, bool;
    let param = [a, b, c];
    for (let i = 0; i < param.length; i++) {
        typeof param[i] === 'string'
            ? (name = param[i])
            : typeof param[i] === 'number'
            ? (num = param[i]) 
            : (bool = param[i])
    }
    bool === true
        ? console.log(`Hello ${name},Your Age Is ${num},You Are Available To Hire`)
        : console.log(`Hello ${name},Your Age Is ${num},You Not Are Available To Hire`)
}
showDetails(38,'Osama',true,  )


