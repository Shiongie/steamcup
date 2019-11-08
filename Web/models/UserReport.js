const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserReportSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: "./images/"
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

});

module.exports = UserReport = mongoose.model('UserReport', UserReportSchema);