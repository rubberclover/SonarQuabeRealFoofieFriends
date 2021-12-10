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
    labour: {
        type: String,
        required: true
    },
    weekend: {
        type: String,
        required: true
    },
    type: [{
        type: ObjectId,
        ref: 'TagEstablishment'
    }],
    image: [{
        url: String,
    }],
    geoposition: {
        latitude: Number,
        longitude: Number,
    },
    owner: {
        type: ObjectId,
        ref: 'User'

    }
});

module.exports = mongoose.model('Establishment', EstablishmentSchema );