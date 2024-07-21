import express from 'express';
import { getTextController, TextController } from '../controller/TextController.js';

const router = express.Router();

router.post('/', TextController);
router.get('/', getTextController)


export default router;