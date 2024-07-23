i = 1;
while (i <= 100) {
  let product = document.createElement("div");
  let productHeading = document.createElement("h2");
  let productParagraph = document.createElement("p");
  let headingText = document.createTextNode(`Product Title ${i}`);
  let paragraphText = document.createTextNode(`Product Description ${i}`);

  productHeading.appendChild(headingText);
  productParagraph.appendChild(paragraphText);

  product.appendChild(productHeading);
  product.appendChild(productParagraph);
  document.body.appendChild(product);
  i++;
}
