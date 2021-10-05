const mongoose = require('mongoose');
const { Schema } = mongoose;

const tagPostSchema = new Schema({
    type: {
        type: String
    }
});

module.exports = mongoose.model('tagPosts', tagPostSchema );