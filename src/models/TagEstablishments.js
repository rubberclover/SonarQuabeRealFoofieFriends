const mongoose = require('mongoose');
const { Schema } = mongoose;


const tagEstablishmentSchema = new Schema({
    type: {
        type: String
    }
});

module.exports = mongoose.model('tagEstablishments', tagEstablishmentSchema );