import { Router } from 'express';
import { hello, loginUser, logoutUser, registerUser } from '../controllers/user.controller.js';

const router = Router();

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/logout').post(logoutUser);
router.route('/hello').get(hello)

export default router;