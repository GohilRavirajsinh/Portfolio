import express from 'express';
import { contactHandle } from '../controller/contactController.js';
const router = express.Router();

router.post('/', contactHandle);

export default router;