// this file is exclusively to say what tp do on certain routes- the logic is found in the file conrollers/posts
import express from 'express';
const router = express.Router();

router.get('/', (req,res)=>{
    res.send('THIS WORKS!')
})
export default router; 