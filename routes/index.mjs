import express from 'express';
import {home} from '../controllers/PagesController.mjs';
import {sendFrom} from'../controllers/FormController.mjs';

export const router = express.Router();

router.get('/', home);
router.post('/send', sendFrom);