const mongoose = require('mongoose');
const { Schema } = mongoose;
const ObjectId = mongoose.Schema.Types.ObjectId;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    rating: [{
        type: ObjectId,
        ref: 'ratings'
    }],
    post: [{
        type: ObjectId,
        ref: 'posts'
    }],
    establishment: [{
        type: ObjectId,
        ref: 'establishments'
    }],
    channel: [{
        type: ObjectId,
        ref: 'channels'
    }],
    eventPublished: [{
        type: ObjectId,
        ref: 'events'
    }],
    eventSuscriber: [{
        type: ObjectId,
        ref: 'events'
    }]
});

module.exports = mongoose.model('users', UserSchema );