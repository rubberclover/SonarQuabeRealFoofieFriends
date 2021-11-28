const mongoose = require('mongoose');
const { Schema } = mongoose;
const ObjectId = mongoose.Schema.Types.ObjectId;

const FotosHomeSchema = new Schema({
    events: [{
        type: String
    }],
    channels: [{
        type: String
    }],
    establishments: [{
        type: String
    }]
});

module.exports = mongoose.model('FotosHome', FotosHomeSchema );