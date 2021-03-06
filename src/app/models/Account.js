const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Account = new Schema({
    username: { type: String },
    password: { type: String },
    name: { type: String },
    role: { type: String, required: true },
    phone: { type: String },
    clubCode: { type: String },
});

module.exports = mongoose.model('Account', Account);