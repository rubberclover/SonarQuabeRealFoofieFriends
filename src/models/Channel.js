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
        ref: 'TagPost'
    }],
    user: {
        type: ObjectId,
        ref: 'User',
        required: true

    },
    image: [{
        type: String
    }]
});

module.exports = mongoose.model('Channel', ChannelSchema );