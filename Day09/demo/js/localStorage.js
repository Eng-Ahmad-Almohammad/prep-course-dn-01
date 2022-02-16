'use strict';

console.log(localStorage);

localStorage.setItem("name", "Sultan");
localStorage.setItem("age",25);

let myName = localStorage.getItem("name");
let age = localStorage.getItem("age")
console.log(myName);
console.log(age);

// localStorage.removeItem("name");

// localStorage.clear();