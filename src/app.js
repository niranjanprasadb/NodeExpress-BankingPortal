const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
app.set('views', path.join(__dirname, '/src/views'));
app.set('view engine', 'ejs');

app.get('/', function (request, response) {
    response.render("index", { 'title': 'Index' });
})

app.listen(3000, function (request, response) {
    console.log("PS Project Running on port 3000!");
});