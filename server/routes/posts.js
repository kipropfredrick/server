import express from 'express';
import { getPost,createPost } from '../controllers/posts.js';
const routep = express.Router();

routep.get('/',getPost);
routep.post('/',createPost);

export default routep;