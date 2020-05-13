const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const UserSchema = require('./User')

const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    
})

module.exports = mongoose.model('Post', PostSchema)