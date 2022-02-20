'use strict';
// Get express from node model
const express = require("express");
// read data from JSON file
const recipes = require("./data.json");

// initializing my server
const app = express();


// Constructor to format the data as I want 
function Recipe(id, title, readyInMinutes, vegetarian,  sourceUrl, image, summary, instructions){
    this.id = id;
    this.title = title;
    this.readyInMinutes = readyInMinutes;
    this.vegetarian = vegetarian;
    this.sourceUrl = sourceUrl;
    this.image = image;
    this.summary = summary;
    this.instructions = instructions;
};
// All my end points note: not found end point always should be in the end.
app.get('/', helloWorldHandler);
app.get('/recipes', recipesHandler);

app.use("*", notFoundHandler);



function recipesHandler(req, res){
    // console.log(recipes);
    let result = [];
    recipes.data.forEach((value) => {
        let oneRecipe = new Recipe(value.id, value.title,value.readyInMinutes, value.vegetarian, value.sourceUrl, value.image, value.summary,  value.instructions);
        result.push(oneRecipe);
    });
    return res.status(200).json(result);
};


function helloWorldHandler(request, response){
    
    return response.send("Hello World");
};


function notFoundHandler(req, res){
    return res.status(404).send("Not Found");
}


// The pice of code which make my server work.
app.listen(3000, () => {
    console.log("Listen on 3000");
});