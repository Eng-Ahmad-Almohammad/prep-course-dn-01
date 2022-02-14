'use strict';


function Student(firstName, lastName, isSleep, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.isSleep = isSleep;
    this.age = age;
    // this.fullname = function(){
    //     console.log(this.firstName, this.lastName);
    // }
};

Student.prototype.fullname = function(){
    console.log(this.firstName, this.lastName);
};

Student.prototype.drinkCoffee = function(){
    console.log("I do not drink coffee");
}

let ahmad = new Student("Ahmad", "Almohammad", false, 24);

let abdulrhman = new Student("Abdulrhman", "Qadan", true, 23);

let mohammad = new Student("Mohammad", "Naji", true, 23);

console.log(ahmad.firstName)
ahmad.fullname();
// ahmad.fullname();
// console.log(ahmad);
// console.log(abdulrhman);
// console.log(mohammad);

// ahmad.fullname();