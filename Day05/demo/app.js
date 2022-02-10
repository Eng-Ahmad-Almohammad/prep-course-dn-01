'use strict';



// console.log("Hello World");

var five = 5;
var greeting = "Hello world";

var z;

z = "Assign";

var maxHightDoor = 20;
// var maxhightdoor = 10;
var max = 20;
var boolean = false;
// console.log(five);
// console.log(z);
// console.log(maxHightDoor);
// console.log(maxhightdoor);
var nan = NaN;
var notValue = null
// console.log(typeof(maxHightDoor));
// console.log(typeof(greeting));
// console.log(typeof(boolean));
// console.log(typeof(NaN));
// console.log(typeof(notValue));
// console.log((nan));


// Popup boxes:
// alert
// confirm
// prompt

// alert("Hello my user");

// var userChoice = confirm("Do you want to leave?");
// console.log(userChoice);

// var promptAnswer = prompt('Type your name');
// console.log(typeof(promptAnswer));

// var hightQuestion = prompt("What is your hight?");
// var hightQuestionAsNumber = Number(hightQuestion);
// console.log((hightQuestionAsNumber));
// console.log(hightQuestion);

// console.log(`Hello ${promptAnswer} and welcome in our website`);
// console.log("Hello ' + promptAnswer  + ' and welcome in our website");

// var fiveAsNumber = 5;

// var fiveAsString = "5";

// console.log(typeof(5));
// console.log(typeof("5"));

// console.log(fiveAsNumber !== fiveAsString);

// if (promptAnswer === "Ahmad"){
//     alert(`Hello ${promptAnswer}`);
// }
// else {
//     alert("Hello stranger");
// }
// Equal To if else
// promptAnswer === "Ahmad" ? alert("Hello Ahmad") : alert("Hello Stranger")

// if(promptAnswer === "Ahmad" ){
//     alert(`Hello ${promptAnswer}`);
    
// }
// else if (promptAnswer === "Yousef"){
//     alert("Hello Yousef");
// }
// else{
    
//     alert("Hello stranger");
// }

// Equal To if else

// promptAnswer === "Ahmad" ? alert(`Hello ${promptAnswer}`) : promptAnswer === "Yousef" ? alert("Hello Yousef") : alert("Hello stranger");

// if(promptAnswer !== "Ahmad" && promptAnswer !== "Yousef"){
//     alert("Hello stranger");
// }
// // else if (promptAnswer === "Yousef"){
// //     alert("Hello Yousef");
// // }
// else{
    
//     alert(`Hello ${promptAnswer}`);
// }


// var hightNumber = Number(hightQuestion);

// if (hightNumber < 160) {
//     alert("Short");
// }
// else if (hightNumber >= 160 && hightNumber <= 180){
//     alert("Mid");
// }
// else{
//     alert("Tall");
// }


var season = prompt("What is the season");

switch(season){
    case "Spring":
        alert("Flowers");
        break;
    case "Summer":
        alert("Kids");
        break;
    case "Autumn":
        alert("Trees");
        break;
    case "Winter":
        alert("Snow");
        break;
    default:
        alert("Nothing");
}