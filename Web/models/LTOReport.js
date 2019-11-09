const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LTOReportSchema = new Schema({
    userReportId: {
        type: String,
        required: true
    }
    ,branchCode: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    status: {
        type: String,
        default: "pending"
    }
}, { collection: 'LTOReport' });

module.exports = LTOReport = mongoose.model('LTOReport', LTOReportSchema);