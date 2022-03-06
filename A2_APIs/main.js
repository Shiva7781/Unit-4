const express = require("express");
// console.log('express:', express)

const app = express();
// console.log('app:', app)

// REST APIs => Representational State Transfer
/*
    get => getting data from server
    post => add some data to server
    put / patch => update some data on the server
    delete => remove some data from server
*/


app.listen(2000, () => {
    console.log("Listing on port 2000");
});

app.get("/users", function (req, res) {
    res.send("Hello");
});

app.get("/books", function (req, res) {
    res.send(data);
});



let data = [
    {
        Name: "M.S.Dhoni",
        Genre: "Former Indian Cricketer Team Captain",
    },
    {
        Name: "Messi",
        Genre: "Footballer",
    },
    {
        Name: "Sunil Chhetri",
        Genre: "Indian Football Team Captain",
    },
    {
        Name: "Virat Kohli",
        Genre: "Cricketer",
    },
];

// console.log("data:", data);
