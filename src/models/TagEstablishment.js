const mongoose = require('mongoose');
const { Schema } = mongoose;


const tagEstablishmentSchema = new Schema({
    type: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('TagEstablishment', tagEstablishmentSchema );