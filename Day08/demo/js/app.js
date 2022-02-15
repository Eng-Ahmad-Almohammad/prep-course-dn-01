'use strict';

let allDrinks = [];
let btn = document.getElementById("greeting");
let nameLabel = document.getElementById("nameLabel");
let form = document.getElementById("dataForm");
let drinksDiv = document.getElementById("drinksDiv");

nameLabel.addEventListener("mouseleave", function(){
    nameLabel.style.color = "black";
});


nameLabel.addEventListener('mouseover', function(){
    nameLabel.style.color = "red";
});

btn.addEventListener("click", greetingFunction);

function greetingFunction(){
    alert("Hello User");
}

function Drink(name, ingredients, cold, 
    hot, image){

        this.name = name;
        this.ingredients = ingredients;
        this.isCold = cold;
        this.isHot = hot;
        this.price = 0;
        this.image = image;
        allDrinks.push(this);
    }

    Drink.prototype.render = function(){

        let title = document.createElement("h3");
        title.textContent = this.name;
        drinksDiv.appendChild(title);

        let ul = document.createElement("ul");
        drinksDiv.appendChild(ul);

        for(let i = 0; i < this.ingredients.length; i++){
            let li = document.createElement("li");
            li.textContent = this.ingredients[i];
            ul.appendChild(li);
        }

        let image = document.createElement("img");
        image.setAttribute("src", this.image);

        drinksDiv.appendChild(image);


    }

    Drink.prototype.getPrice = function(){
        this.price = Math.floor(Math.random() * (10 - 5 + 1) + 5);
    }

let americano = new Drink("americano", ["coffee", "ice"], true, false, './images/americano.png');
let mocha = new Drink("mocha", ["Coffee", "Tea"], false, true, "./images/mocha.png");
// console.log(allDrinks);


form.addEventListener("submit", handelSubmit)

function handelSubmit(event){
    event.preventDefault();
    let name = event.target.name.value;
    let ingredients = event.target.ingredients.value.split(",")
    let image = event.target.image.value;

    let isCold = event.target.isCold.checked;
    let isHot = event.target.isHot.checked;
    
    let newDrink = new Drink(name, ingredients, isCold, isHot, image);
    newDrink.getPrice();
    renderAll();
    form.reset();
}
// console.log(americano);
// console.log(mocha);

function renderAll(){
    // empty div;
    drinksDiv.innerHTML = "";

    for (let i = 0; i < allDrinks.length; i++) {
        allDrinks[i].getPrice();
        allDrinks[i].render();
        
    }

};

renderAll();