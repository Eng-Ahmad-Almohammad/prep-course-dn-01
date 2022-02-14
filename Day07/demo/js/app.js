'use strict';

let allDrinks = [];

function Drink(name, ingredients, cold, 
    hot, price){

        this.name = name;
        this.ingredients = ingredients;
        this.isCold = cold;
        this.isHot = hot;
        this.price = price;
        this.image = `./images/${this.name}.png`;
        allDrinks.push(this);
    }

    Drink.prototype.render = function(){
        document.write(`<h1>${this.name}</h1>`);
    }

let americano = new Drink("americano", ["coffee", "ice"], true, false, 10);
let mocha = new Drink("mocha", ["Coffee", "Tea"], false, true, 5);
console.log(allDrinks);

// console.log(americano);
// console.log(mocha);
for (let i = 0; i < allDrinks.length; i++) {
    allDrinks[i].render();
    
}