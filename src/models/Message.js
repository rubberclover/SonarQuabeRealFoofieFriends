const mongoose = require('mongoose');
const { Schema } = mongoose;
const ObjectId = mongoose.Schema.Types.ObjectId;

const MessageSchema = new Schema({
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
    viewedAt: {
        type: Boolean,
    },
});

module.exports = mongoose.model('Message', MessageSchema );