const express = require('express');
const router = express.Router();

const User = require ('../../models/User');

// @route POST api/user
// @desc check user login
// @access Public
router.post('/', (req, res)=>{
    const { username, password} = req.body;
    if (!username || !password) {
        return res.status(400).json({msg: 'Please enter all the fields'})
    }

    User.findOne({username})
        .then(user => {
            if (!user) return res.status(400).json({msg: 'Username does not exists'})
        });

    if (password != User.password) 
        return res.status(400).json({msg: 'Wrong username or password'});
    
    
        
});

module.exports = router;
