const express = require('express');
const router = express.Router();

const User = require ('../../models/User');

//@route GET api/user
//@desc Get All Users
//@access Public
router.get('/', (req, res)=>{
    User.find()
        .then(users => res.json(users))
});

//@route POST api/user
//@desc add new user
//@access Public
router.post('/', (req, res)=>{
    /* insert in db
    const newUserReport = new UserReport({
        username: req.body.name
    });
    newUserReport.save().then(userReport => res.json(item));
    */
});

module.exports = router;