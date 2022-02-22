'use strict';
// Get express from node model
const express = require("express");
// read data from JSON file
const recipes = require("./data.json");
// Read .env file
const dotenv = require("dotenv");
// Get axios so we can send HTTP requests to an API
const axios = require("axios");
// It will connect the database with the server
const pg = require("pg");


// start(configure) the dotenv
dotenv.config();

// initializing my server
const app = express();

// Variables that live in my .env file
const APIKEY = process.env.APIKEY;
const PORT = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;


// Initialize the connection
const client = new pg.Client(DATABASE_URL);

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
// To get the data from the body object
app.use(express.json());
// All my end points note: not found end point always should be in the end.
app.get('/', helloWorldHandler);
app.get('/recipes', recipesHandler);
app.get("/searchRecipes", searchRecipesHandler);
app.post("/addFavRecipe", addFavRecipeHandler);
app.get("/favRecipes", favRecipesHandler);
app.use("*", notFoundHandler);
//Make my server use errorHandler function
app.use(errorHandler);


function recipesHandler(req, res){
    // console.log(recipes);
    let result = [];
    // Axios will send an HTTP request and it will return promise and all the code that deponed on the returned 
    // data should be inside .then
    // apiResponse: is axios object and we just need the data property from it because it has the actual 
    //data that coming fro the API.
    axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${APIKEY}&number=10`)
    .then(apiResponse => {
        apiResponse.data.recipes.map(value => {
            let oneRecipe = new Recipe(value.id, value.title,value.readyInMinutes, value.vegetarian, value.sourceUrl, value.image, value.summary,  value.instructions);
            result.push(oneRecipe);
        })
        return res.status(200).json(result);
    }).catch(error => {
        errorHandler(error, req, res);
    })
    // recipes.data.forEach((value) => {
    //     let oneRecipe = new Recipe(value.id, value.title,value.readyInMinutes, value.vegetarian, value.sourceUrl, value.image, value.summary,  value.instructions);
    //     result.push(oneRecipe);
    // });
    
};


function helloWorldHandler(request, response){
    
    return response.send("Hello World");
};


function searchRecipesHandler(req, res){
    const search = req.query.recipe
    let results = [];
    axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${APIKEY}&query=${search}`)
    .then(apiResponse=>{
        apiResponse.data.results.map(value => {
            let oneRecipe = new Recipe(value.id || "N/A", value.title || "N/A", value.readyInMinutes || "N/A", value.vegetarian || "N/A", value.sourceUrl || "N/A", value.image || "N/A", value.summary || "N/A", value.instructions || "N/A")
            results.push(oneRecipe);
        });
        return res.status(200).json(results);
    }).catch(error => {
        errorHandler(error, req, res);
    })

};

function addFavRecipeHandler(req, res){
    const recipe = req.body;
    // console.log(recipe);

    const sql = `INSERT INTO favRecipes(title, readyInMinutes, vegetarian, sourceUrl, image, summary, instructions) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *`
    const values = [recipe.title, recipe.readyInMinutes, recipe.vegetarian, recipe.sourceUrl, recipe.image, recipe.summary, recipe.instructions]
    client.query(sql, values).then((result)=>{
        return res.status(201).json(result.rows);
    }).catch((error) => {
        errorHandler(error, req, res);
    });
};

function favRecipesHandler(req, res){
    const sql = `SELECT * FROM favRecipes`;

    client.query(sql).then((result) => {
        return res.status(200).json(result.rows);
    }).catch((error) => {
        errorHandler(error, req, res);
    });
};

function errorHandler(error,req,res){
    const err = {
        status : 500,
        message : error
    }
    return res.status(500).send(err);
}

function notFoundHandler(req, res){
    return res.status(404).send("Not Found");
}


// The pice of code which make my server work.
client.connect()
.then(() => {
    app.listen(PORT, () => {
        console.log(`Listen on ${PORT}`);
    });
});
