import { Router } from 'express';
import { createPost, getPost } from '../controllers/post.controller.js';


const router = Router();

router.route('/create').post(createPost);
router.route('/read').get(getPost);

export default router