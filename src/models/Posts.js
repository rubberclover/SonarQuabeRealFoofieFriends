const mongoose = require('mongoose');
const { Schema } = mongoose;
const ObjectId = mongoose.Schema.Types.ObjectId;

const PostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    creationDate: {
        type: Date,
        required: true
    },
    tagPost: [{
        type: ObjectId,
        ref: 'tagPosts'
    }],
    user: {
        type: ObjectId,
        ref: 'users',
        required: true

    },
    image: [{
        url: String
    }]
});

module.exports = mongoose.model('posts', PostSchema );