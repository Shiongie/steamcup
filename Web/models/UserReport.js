const mongoose = require('mongoose');

const UserReportSchema = mongoose.Schema({
    username: {
        type: String,
    },
    image: {
        type: String,
        default: "../images/"
    },
    date: {
        type: Date,
        default: Date.now
    },
    location: {
        type: String
    },
    plateno: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: "received"
    }

}, { collection: 'UserReport' });

module.exports = UserReport = mongoose.model('UserReport', UserReportSchema);