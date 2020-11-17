import mongoose from 'mongoose';
import PostMessage from '../models/postMessage.js';

export const getPosts = async (req,res)=>{
   try {
       const postMessages = await PostMessage.find();
      
       res.status(200).json(postMessages); //status(200) means everything is okay- json will return a array of all messages 
   } catch (error) {
      res.status(404).json({message: error.message}) 
   }
}
export const createPost= async (req, res) =>{
    const post= req.body;

    const newPost = new PostMessage(post)
    try {
         await newPost.save();

         res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({message:error.message});
    }
    res.send('Post Creation')
}
export const updatePost= async(req,res) =>{
    const {id:_id/*with :_id we are renaming id to _id*/} = req.params;
    const post= req.body
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that Id');

   const updatedPost= await PostMessage.findByIdAndUpdate(_id, {...post,_id}, {new:true} )

   res.json(updatedPost);
}