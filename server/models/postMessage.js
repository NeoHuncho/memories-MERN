import mongoose from 'mongoose';

//this Schema is to say what properties each posts need to have.
const postSchema= mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount:{
        type: Number,
        default: 0
    },
    createdAt:{
        type: Date,
        default: new Date()
    }
});
//this will turn the schema into a model
const PostMessage= mongoose.model('PostMessage'/*name of model*/, postSchema)

export default PostMessage; 