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
        ref: 'Rating'
    }],
    post: [{
        type: ObjectId,
        ref: 'Post'
    }],
    establishment: [{
        type: ObjectId,
        ref: 'Establishment'
    }],
    channel: [{
        type: ObjectId,
        ref: 'Channel'
    }],
    eventPublished: [{
        type: ObjectId,
        ref: 'Event'
    }],
    eventSuscriber: [{
        type: ObjectId,
        ref: 'Event'
    }],
    userImage: {
        type: String,
    },
    postFavorite:[{
        type: ObjectId,
        ref: 'Post'
    }],
    establishmentFavorite:[{
        type: ObjectId,
        ref: 'Establishment'
    }],
    chat:[{
        type: ObjectId,
        ref: 'Chat'
    }],
    description:{
        type: String,
    }
});

module.exports = mongoose.model('User', UserSchema );