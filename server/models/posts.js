const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    topic:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true        
    },
    postCategory:{
        type:String,
        required:true
    }
});

const posts = mongoose.model('Posts',postSchema)

module.exports = posts;