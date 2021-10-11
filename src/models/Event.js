const mongoose = require('mongoose');
const { Schema } = mongoose;
const ObjectId = mongoose.Schema.Types.ObjectId;

const EventSchema = new Schema({
    creationDate: {
        type: Date
    },
    title: {
        type: String
    },
    description: {
        type: String
    },
    location: {
        type: String
    },
    type: [{
        type: ObjectId,
        ref: 'TagEvent'
    }],
    image: [{
        url: String
    }],
    geoposition: {
        latitude: Number,
        longitude: Number
    },
    finishDate: {
        type: Date
    },
    startDate: {
        type: Date
    },
    userPublished: {
        type: ObjectId,
        ref: 'User',

    },
    userSuscriber: [{
        type: ObjectId,
        ref: 'User',

    }]
});

module.exports = mongoose.model('Event', EventSchema );