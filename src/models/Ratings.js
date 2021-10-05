const mongoose = require('mongoose');
const { Schema } = mongoose;
const ObjectId = mongoose.Schema.Types.ObjectId;

const RatingSchema = new Schema({
    confortRating: {
        type: Int32Array,
        required: true
    },
    comment: {
        type: String
    },
    realfoodRating: {
        type: Int32Array,
        required: true
    },
    priceRating: {
        type: Int32Array,
        required: true
    },
    establishment: {
        type: ObjectId,
        ref: 'establishments',
        required: true
    },
    user: {
        type: ObjectId,
        ref: 'users',
        required: true

    }
});

module.exports = mongoose.model('ratings', RatingSchema );