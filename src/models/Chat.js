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
        sender:{
        type: ObjectId,
        ref: 'User'
        },
        receiver:{ 
        type: ObjectId,
        ref: 'User'
        },
        text:{
        type:String
    }
    }]
});

module.exports = mongoose.model('Chat', ChatSchema );