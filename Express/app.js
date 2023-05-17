const express = require("express");
const app = express();

app.use('/',(req, res, next) => {
    console.log("This is logs middleware")
    next();
})

app.use('/users',(req, res, next) => {
    console.log("Users mmiddleware")
    res.send('<h1>Hey User</h1>');
})

app.use('/',(req, res, next) => {
    console.log("I'm another mmiddleware")
    res.send('<h1>Hello from Express!</h1>');
})

app.listen(3000);
