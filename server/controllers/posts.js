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