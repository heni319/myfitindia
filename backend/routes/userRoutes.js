import express from 'express';
import { authUser, registerUser } from '../controllers/userController.js';

const router = express.Router();

// Route for Signup (POST /api/users)
router.post('/', registerUser);

// Route for Login (POST /api/users/login)
router.post('/login', authUser);

export default router;