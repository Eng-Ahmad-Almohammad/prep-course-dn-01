'use strict';

let Ahmad = {
    firstName : "Ahmad",
    lastName : "Almohammad",
    age : 24,
    isSleep : false,

    drinkCoffee: function(){
        console.log("I do not like coffee");
    },

    fullName: function(){
        console.log(this.firstName, this.lastName)
    }
}

// console.table(Ahmad);

// console.log(`Ahmad's age is ${Ahmad.age}`);
// console.log(`Ahmad's age is ${Ahmad['age']}`);

// Ahmad.drinkCoffee();

// Ahmad.lastName = "Othman";

console.log(Ahmad);

// Ahmad.midName = "Walid";
Ahmad["midName"] = "Walid";

// console.log(Ahmad);

// Ahmad.fullName();


// Ahmad.drinkTea = function(){
//     console.log("Drink Tea");
// };

// Ahmad.drinkTea();