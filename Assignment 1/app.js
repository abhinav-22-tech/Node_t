const express = require('express');
const bodyParser = require('body-parser');

const path = require('path');

const app = express();

const roots = require('./routes/root');
const users = require('./routes/users');

app.use(roots);
app.use(users);

app.listen(3000);