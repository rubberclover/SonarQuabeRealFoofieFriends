const mongoose = require('mongoose');
const { Schema } = mongoose;
const ObjectId = mongoose.Schema.Types.ObjectId;

const EventSchema = new Schema({
    creationDate: {
        type: Date
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    type: [{
        type: ObjectId,
        ref: 'TagEvent'
    }],
    images: [{
        url: String
    }],
    geoposition: {
        latitude: Number,
        longitude: Number
    },
    finishDate: {
        type: Date,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    userPublished: {
        type: ObjectId,
        ref: 'User'
    },
    userSuscriber: [{
        type: ObjectId,
        ref: 'User',
    }]
});

module.exports = mongoose.model('Event', EventSchema );