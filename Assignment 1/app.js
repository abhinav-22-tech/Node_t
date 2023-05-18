const express = require('express');

const path = require('path');

const app = express();

const roots = require('./routes/root');
const users = require('./routes/users');

app.use(express.static(path.join(__dirname, 'public')));

app.use(roots);
app.use(users);

app.listen(3000);