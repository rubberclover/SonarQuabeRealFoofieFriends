const mongoose = require('mongoose');
const { Schema } = mongoose;

const tagEventSchema = new Schema({
    type: {
        type: String
    }
});

module.exports = mongoose.model('tagEvents', tagEventSchema );