# Steps for building a server

## 2/20/2022 Sunday
1- Create server.js file

2- npm init -y 

3- npm install express

4- const express = require("express")

5- const app = express()

6- app.listen(PORT, ()=>{
    console.log("Anything")
})

7- I can create end points (ex: app.get("/", helloWorldHandler))

8- I will create the function for that end point(ex: helloWorldHandler)

## 2/21/2022

We continue building on the steps from the day before
Additions

1- Instead of reading from the json file we send a request to a third party API

2- We read the documentation of the API and we tried on the Chrome or PostMan before we use it in our code.

3- We found that we should create an API Key

4- We installed Axios to send an HTTP request to the API.

5- Axios is returning a promise so I should write my code that depend on the request result in the .then function.

6- Axios is returng a huge object so I just care about the `data` property.

7- We found the API key should not shown in my code so we created .env file and add the API Key there

8- We installed `dotenv` library the configure it to make our server read the .env file.

9- We created .env.example where we show the required variable for any developer will work on the same project.

10- We created error handler:
    - We create a function.
    - We make our server know about it by using app.use
    - When i want to use I will use it in the .catch function.

11- We created new end point that take the parameter from the URl where we found it inside req.query


## 2/22/2022

1- Install PostgreSQL

2- I run mt postgres server (sqlstart)

3- psql then create a database (CREATE DATABASE name-of-the-database)

4- npm install pg

5- Create the database URL

6- Do the configurations for pg (require, new pg.Client, clint.connect)

7- End the take a post request

8- app.use(express.json()) (top of the all end points)

9- build the function that insert in database

10- build a function that get from the database