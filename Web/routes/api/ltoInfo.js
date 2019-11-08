const express = require('express');
const router = express.Router();

const LTOInfo = require ('../../models/LTOInfo');

//@route GET api/ltoInfo
//@desc Get All ltoInfo
//@access Public
router.get('/', (req, res)=>{
    LTOInfo.find()
        .then((ltoInfo) => res.json(ltoInfo))
});

//@route POST api/ltoInfo
//@desc add new lto branch
//@access Public
router.post('/', (req, res)=>{
    const newLtoBranch = new LTOInfo({
        branchCode: req.body.branchCode,
        office: req.body.office,
        address: req.body.address
    });
    newLtoBranch.save().then(ltoInfo => res.json(ltoInfo));
});

//@route DELETE api/ltoInfo/:id
//@desc delete a ltoInfo
//@access Public
router.delete('/:id', (req, res)=>{
    LTOInfo.findById(req.params.id)
    .then(ltoInfo => ltoInfo.remove().then(()=> res.json({success: true})))
    .catch(err => res.status(404).json({success:false}));
});


module.exports = router;