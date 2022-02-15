'use strict';
// First step
let mainSection = document.getElementById("mainSection");

// let mainSection = document.getElementsByTagName("main")[0];

// let classes = document.getElementsByClassName('hello')[0];

// console.log(classes);


// Second step
// let title = document.createElement("h1");

// title.textContent = "Hello World";

// mainSection.appendChild(title);


// let salaryDiv = document.getElementById("salary");

// let salaryTag = document.createElement("h3");

// salaryTag.textContent = "1000$";

// salaryDiv.appendChild(salaryTag);

// let div = document.createElement("div");

// mainSection.appendChild(div);


// let salaryTag = document.createElement("h3"); 

// salaryTag.textContent = "1000$";

// div.appendChild(salaryTag);

let title = document.createElement("h1");

title.textContent = "Tea";

mainSection.appendChild(title);


let img = document.createElement("img");

img.setAttribute("src", "https://thumbs.dreamstime.com/b/green-cup-hot-tea-icon-vector-bag-mug-leaf-isolated-white-background-204282356.jpg")

mainSection.appendChild(img);

mainSection.style.backgroundColor = "blue";

title.style.color = "red";

img.style.width = "50px";
img.style.height = "50px";



// Step one = get the element from HTML
// Step tow = create an element
// Step three = add text content, set attribute
// Step four = append the element that you create to the element that you got from HTML