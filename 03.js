let pageTitle = "Marwan",
    pageDesc = "Marwan online school",
    releaseDate = "25/10";
let pageContent = `
<div>
    <h3>${pageTitle}</h3>
    <p>${pageDesc}</p>
    <span>${releaseDate}</span>
</div>
`;
var finalContent = pageContent.repeat(4);
document.write(finalContent);
