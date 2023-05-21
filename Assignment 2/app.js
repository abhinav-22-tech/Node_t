const express = require('express');
const bodyParser = require('body-parser');

const main = require('./routes/main');
const users = require('./routes/users');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(main.router);
app.use(users);

app.listen(3000);