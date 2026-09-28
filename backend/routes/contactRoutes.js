import express from 'express';
import { contactHandle } from '../controller/contactController.js';
const router = express.Router();

router.post('/contact', contactHandle);

export default router;