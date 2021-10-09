const mongoose = require('mongoose');
const { Schema } = mongoose;
const ObjectId = mongoose.Schema.Types.ObjectId;

const EstablishmentSchema = new Schema({
    location: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    timeClose: {
        type: String,
        required: true
    },
    timeOpen: {
        type: String,
        required: true
    },
    type: [{
        type: ObjectId,
        ref: 'TagEstablishment'
    }],
    rating: [{
        type: ObjectId,
        ref: 'Rating'

    }],
    image: [{
        url: String
    }],
    geoposition: {
        latitude: Number,
        longitude: Number,
    },
    owner: [{
        type: ObjectId,
        ref: 'User'

    }]
});

module.exports = mongoose.model('Establishment', EstablishmentSchema );