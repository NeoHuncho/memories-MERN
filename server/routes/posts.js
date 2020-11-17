// this file is exclusively to say what tp do on certain routes- the logic is found in the file conrollers/posts
import express from 'express';

import {getPosts,createPost,updatePost} from '../controllers/posts.js' //we use braces for import as it is a named export and not a default export
const router = express.Router();

router.get('/', getPosts)
router.post('/', createPost)
router.patch('/:id', updatePost)// patch serves to update. We added Id so that we know which post we are updating
export default router; 