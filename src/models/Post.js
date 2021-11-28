const mongoose = require('mongoose');
const { Schema } = mongoose;
const ObjectId = mongoose.Schema.Types.ObjectId;

const PostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    creationDate: {
        type: Date,
        required: true
    },
    tagPost: [{
        type: ObjectId,
        ref: 'TagPost'
    }],
    user: {
        type: ObjectId,
        ref: 'User',
        required: true
    },
    channel: {
        type: ObjectId,
        ref: 'Channel'
    },
    image: [{
        type: String
    }],
    likes: [{
        type: ObjectId,
        ref: 'User'
    }],
    comments: [{
        _id: {
            type: ObjectId
        },
        idUser: {
            type: ObjectId,
            ref: 'User'
        },
        comment: {
            type: String
                },
        creationDate: {
            type: Date           
        }
    }]

});

module.exports = mongoose.model('Post', PostSchema );