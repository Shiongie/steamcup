const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LTOInfoSchema = new Schema({
    branchCode: {
        type: String,
        required: true
    },
    office: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    }
}, { collection: 'LTOInfo' });

module.exports = LTOInfo = mongoose.model('LTOInfo', LTOInfoSchema);