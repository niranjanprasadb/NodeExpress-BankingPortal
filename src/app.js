const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

//Reading Accounts Data
const accountData = fs.readFileSync('src/json/accounts.json', 'utf8');
console.log("JSON_AccountData:" + accountData);
const accounts = JSON.parse(accountData);
console.log("JavaScript_AccountData:" + JSON.stringify(accounts));

//Reading User Data
const userData = fs.readFileSync('src/json/users.json', 'utf8');
console.log("JSON_UserData:" + userData);
const users = JSON.parse(userData);
console.log("JavaScript_UserData:" + JSON.stringify(userData));

app.get('/', (request, response) => response.render('index', { 'title': 'Account Summary', 'accounts': accounts }));
app.get('/savings', (request, response) => response.render('account', { 'account': accounts.savings }));
app.get('/checking', (request, response) => response.render('account', { 'account': accounts.checking }));
app.get('/credit', (request, response) => response.render('account', { 'account': accounts.credit }));
app.get('/profile', (request, response) => response.render('profile', { 'user': users[0] }));
app.listen(3000, () => console.log("PS Project Running on port 3000!"));