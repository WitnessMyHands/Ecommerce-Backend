# Employee Tracker

GitHub Repository Link: https://github.com/WitnessMyHands/Ecommerce-Backend

[YouTube Video Link](https://www.youtube.com/watch?v=iy7bFBIJqf8)

## Table of Contents

- [Description](#Description)
- [Usage](#Usage)
- [Tests](#Tests)
- [Questions](#Questions)

## Description

The task of this project is to modify a working Express.js API using Sequelize to interact with the MySQL database.

The application features:
* Sequelize
* MySQL
* Javascript
* Express.js
* Node.js
* Insomnia

In order to run the application successfully in your local browser, please follow the Instructions found under '[Usage](#Usage)'.
  
## Usage

Follow these steps to run the application:

* Install and run MySQL WorkBench (or similar software) to establish a MySQL Database and perform Queries. 

From the Terminal:

* Start by navigating to the Local Repo
* Create an envelope file named `.env` inputting your Database Information in the following style:
`DB_NAME`
`DB_USER`
`DB_PASSWORD`
* Install dependencies running `npm i`
* Install MySQL using `npm i mysql`
* Seed your application with the given data by running, `npm run seed`
* As you begin developing the application use `npm run dev`

## Tests

For this example, we can test endpoints by using Insomnia. From the Terminal, run the application using `npm run start`

* Category
    - Return ALL Categories or to Create a Category
    `http://localhost:3001/api/categories`
    - Return a SINGLE Category, Update or Delete a Category
    `http://localhost:3001/api/categories/:id`

* Product
    - Return ALL Products or Create a Product
    `http://localhost:3001/api/products`
    - Return a SINGLE Product, Update or Delete a Product
    `http://localhost:3001/api/products/:id`

* Tag
    - Return ALL Tags or Create a Tag
    `http://localhost:3001/api/tags`
    - Return a SINGLE Tag, Update or Delete a Tag
    `http://localhost:3001/api/tags/:id`

## Questions
*Please contact WitnessMyHands via GitHub with any questions or concerns.*

- https://github.com/WitnessMyHands
