const mongoose = require('mongoose');
const { Schema } = mongoose;
const ObjectId = mongoose.Schema.Types.ObjectId;

const ChatSchema = new Schema({
    user1: {
        type: ObjectId,
        ref: 'User',
        required: true
    },
    user2: {
        type: ObjectId,
        ref: 'User',
        required: true
    },
    messages: [{
        sender: {
            type: ObjectId,
            ref: 'User',
            required: true
        },
        receiver: {
            type: ObjectId,
            ref: 'User',
            required: true
        },
        text: {
            type: String
        },
        sendAt: {
            type: Date,
        },
        viewedUser1: {
            type: Boolean,
        },
        viewedUser2: {
            type: Boolean,
        }
    }]
});

module.exports = mongoose.model('Chat', ChatSchema );