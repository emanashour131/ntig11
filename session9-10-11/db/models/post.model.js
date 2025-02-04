// post type , txt, file   => txt, image, video

// type => txt  => txt required
const mongoose = require("mongoose")
const postSchema = mongoose.Schema({
    postType:{
        type:String,
        trim:true,
        required:true,
        enum: ['txt', "image", "video"]
    },
    txt:{
        type:String,
        trim:true,
        required: function(){ return this.postType=="txt"}
    },
    file:{
        type:String,
        trim:true,
        required: function(){ return this.postType!="txt"}
    }
})

const Post = mongoose.model("Post", postSchema)

module.exports = Post