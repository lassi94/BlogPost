

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: String,
    url: String,
    desc: String
}, {collection: 'post'});

module.exports = mongoose.model('post', postSchema);