const express = require('express');

const router = express.Router(); 

router.get('/users', (req, res, next) => {
    res.send('Hello User');
})

module.exports = router;