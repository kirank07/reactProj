import express from 'express';
import { addUser } from '../controller/usercontroller.js'
const router = express.Router ();

router.post('/add', addUser);

export default router;
