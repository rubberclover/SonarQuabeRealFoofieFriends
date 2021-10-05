const mongoose = require('mongoose');
const { Schema } = mongoose;
const ObjectId = mongoose.Schema.Types.ObjectId;
const Double = mongoose.Schema.Types.Double;

const EventSchema = new Schema({
    creationDate: {
        type: Date,
        required: true
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
    date: {
        type: Date,
        required: true
    },
    user: {
        type: ObjectId,
        ref: 'users',
        required: true

    },
    type: [{
        type: ObjectId,
        ref: 'tagEvents'
    }],
    image: [{
        url: String
    }],
    geoposition: [{
        latitude: Double,
        longitude: Double,
    }],
    finishHour: {
        type: String,
        required: true
    },
    startHour: {
        type: String,
        required: true
    },
    userPublished: {
        type: ObjectId,
        ref: 'users',
        required: true

    },
    userSuscriber: [{
        type: ObjectId,
        ref: 'users',

    }]
});

module.exports = mongoose.model('events', EventSchema );