const express = require('express');
const router = express.Router();

const LTOReport = require ('../../models/LTOReport');

//@route GET api/ltoReport
//@desc Get All ltoReport
//@access Public
router.get('/', (req, res)=>{
    LTOReport.find()
        .then((ltoReport) => res.json(ltoReport))
});

//@route POST api/ltoReport
//@desc add new lto Report
//@access Public
router.post('/', (req, res)=>{
    const newLtoReport = new LTOInfo({
        userReportId: req.body.userReportId,
        branchCode: req.body.branchCode,
        description: req.body.description
    });
    newLtoReport.save().then(ltoReport => res.json(ltoReport));
});

//@route DELETE api/ltoReport/:id
//@desc delete a ltoReport
//@access Public
router.delete('/:id', (req, res)=>{
    LTOReport.findById(req.params.id)
    .then(ltoReport => ltoReport.remove().then(()=> res.json({success: true})))
    .catch(err => res.status(404).json({success:false}));
});


module.exports = router;