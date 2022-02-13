'use strict';


// var saturday = "Saturday";
// var sunday = "Sunday";

// var weekDays = ["Saturday", "Sunday", "Monday", 1, false]
// console.log(weekDays.length)
// console.log(weekDays[weekDays.length -1]);

// weekDays[0] = "Friday";

// console.log(weekDays);

// weekDays[weekDays.length] = 5
// console.log(weekDays);

// weekDays[6] = "Ahmad";
// console.log(weekDays);

// weekDays.push("Bashar");
// console.log(weekDays);

// weekDays.pop();
// console.log(weekDays);

// weekDays.shift();
// console.log(weekDays);

// weekDays.unshift("In the beginning");
// console.log(weekDays);
// var string = weekDays.toLocaleString()
// console.log(string);
// console.log(weekDays);

// var matrix = [["Friday", "Saturday"], ["spring", "summer"]]


// *****For loops*****
// for(var i = 0; i <= 5 ; i = i +1 ){
//     console.log(i);
// }
// var weekDays = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]

// for(var i= weekDays.length -1; i >= 0 ; i-- ){
//     console.log(`Index number ${i}: ${weekDays[i]}`)
    
// }

// var numbers = [];

// for(var i = 1; i <= 10 ; i++ ){
//     numbers.push(i);
// }

// console.log(numbers);
// *****while loops*****

// var userInput = prompt("Enter Male or Female");
// userInput = userInput.toLowerCase()
// while(userInput !== "male"   && userInput !== "female"){
//     userInput = prompt("Enter Male or Female").toLowerCase();
// };

// console.log("Finished");

// var numbers = []
// var counter = 0;

// while(true){
//     if( counter < 10){
        
//         numbers.push(counter + 1);
//         counter++;
//         continue;
//         console.log(`Hello #${counter}`);
//     }
//     else{
//         break;
//     }
// }
// console.log(numbers);

// do while loops

// do{
//     console.log("Hello");
// }while(false);
// var flag = true
// while(flag){
//     console.log("Hello");
//     flag = false;
// }

// function helloWorld(){
//     console.log("Hello");
//     console.log("World");
//     console.log("Ahmad");
// };

// helloWorld();


// console.log("***************************")
// var x = 12 +3
// // | 
// // |
// // |
// // console.log("Hello");
// // console.log("World");
// // console.log("Ahmad");\

// helloWorld()

// console.log("***************************")

// |
// |
// |
// console.log("Hello");
// console.log("World");
// console.log("Ahmad");

// helloWorld();
// var ahmadName = "Ahmad"

// function userName(name, city){
//     console.log(`Hello ${name} from ${city}`);
// };



// userName(ahmadName, "Amman", "Irbid");

var weekDays = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
var seasons = ["Spring", "Summer", "Autumn", "Winter"]

// for(var i = 0; i < weekDays.length; i++){
//     console.log(weekDays[i])
// };

// for(var i = 0; i < seasons.length; i ++){
//     console.log(seasons[i])
// }

// function printArrayElement(arr){

//     for(var i = 0; i < arr.length; i++){
//         console.log(arr[i])
//     }
// };

// printArrayElement(weekDays);
// printArrayElement(seasons);


// function reversingArray(arrayName){
//     var reversedArray = arrayName.reverse()
//     console.log(reversedArray)
// };

// reversingArray(seasons);
// reversingArray(weekDays);

// function sum(x, y ){
//     var z = x + y;
//     return z;
// };

// var result = sum(3,5);
// console.log(result);


// var sumVariable = function(x,y){
//     var z = x + y;
//     return z
// };
// var anyVariable = 3
// console.log(anyVariable+sumVariable(5,5));


// var sumUsingArrow = (x,y) =>  x+y

// var consoleUsingArrow = name => console.log(name)

// console.log(sumUsingArrow(12,25))

// consoleUsingArrow("Ahmad");

// var multi = (x, y) =>  x * y;


// for(var i = 0; i < 1; i ++){
//     let zero = "LabLabLab";
//     console.log(zero);

// }

// console.log(zero);

// const zero = 0
// zero = 1

function local(){
    var variable = 22;
    return variable
};

console.log(variable)