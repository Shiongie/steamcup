const express = require('express');
const router = express.Router();

const UserReport = require ('../../models/UserReport');

//@route GET api/userReport
//@desc Get All UserReports
//@access Public
router.get('/', (req, res) => {
    UserReport.find()
        .then(userReports => res.json(userReports))
});

//@route POST api/userReport
//@desc add new user report
//@access Public
router.post('/', (req, res)=>{
    const newUserReport = new UserReport({
        username: req.body.username,
        image: req.body.username,
        location: req.body.location,
        plateno: req.body.plateno
    });
    newUserReport.save().then(userReport => res.json(userReport));
});

//@route DELETE api/userReport/:id
//@desc delete a userreport
//@access Public
router.delete('/:id', (req, res)=>{
    UserReport.findById(req.params.id)
    .then(userReport => userReport.remove().then(()=> res.json({success: true})))
    .catch(err => res.status(404).json({success:false}));
});

module.exports = router;