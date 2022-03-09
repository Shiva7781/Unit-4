const express = require("express");

const app = express();

app.get("/books", allBooks, (req, res) => {
    return res.send({ rotue: "books" });
});

app.get("/books/:name", singleBook, (req, res) => {
    return res.send({ bookName: req.name });
});

function allBooks(req, res, next) {
    console.log("Fetching all books");

    next();
}

function singleBook(req, res, next) {
    req.name = req.params.name;

    next();
}

app.listen(5000, () => {
    console.log("listening on port 5000");
});
