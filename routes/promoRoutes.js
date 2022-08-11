import express from 'express';
import { createPromo, getPromos } from '../controllers/promos/promoController.js';

const router = express.Router();

router.route('/').post(createPromo).get(getPromos);

export default router;
