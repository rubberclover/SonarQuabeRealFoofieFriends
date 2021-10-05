const mongoose = require('mongoose');
const { Schema } = mongoose;
const ObjectId = mongoose.Schema.Types.ObjectId;

const ChannelSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    post: [{
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

module.exports = mongoose.model('channels', ChannelSchema );