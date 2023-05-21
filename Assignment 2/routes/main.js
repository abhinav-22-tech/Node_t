const express = require('express');

const router = express.Router();

const usernames = [];

router.get('/', (req, res, next) => {
    res.render('main', {pageTitle: 'Main page'});
})

router.post('/', (req, res, next) => {
    usernames.push(req.body.username);
    res.redirect('/users');
})


exports.router = router;
exports.usernames = usernames;