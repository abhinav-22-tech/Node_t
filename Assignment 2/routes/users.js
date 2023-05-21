const express = require('express');

const userData = require('./main');

const router = express.Router();

router.get('/users', (req, res, next) => {
    const usersname = userData.usernames;
    res.render('users', {
        pageTitle: 'Users page', 
        usernames: usersname
    });
})

module.exports = router;