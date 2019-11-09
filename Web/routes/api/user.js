const express = require('express');
const router = express.Router();

const User = require ('../../models/User');

// @route POST api/user
// @desc add new user
// @access Public
router.post('/', (req, res)=>{
    const { firstname, lastname, username, email, password} = req.body;
    if (!firstname || !lastname || !username || !password) {
        return res.status(400).json({msg: 'Please enter all the fields'})
    }

    User.findOne({username})
        .then(user => {
            if (user) return res.status(400).json({msg: 'Username already exists'})
        });
        
    const newUser = new User ({
        username, 
        password,
        firstname,
        lastname,
        email
    });
    newUser.save().then(userReport => res.json(userReport));
});

module.exports = router;
