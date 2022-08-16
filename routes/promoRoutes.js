import express from 'express';
import { createPromo, getPromos } from '../controllers/promos/promoController.js';
import checkAuth from '../middlewares/checkAuth.js';

const router = express.Router();

router.route('/').post(checkAuth, createPromo).get(getPromos);

export default router;
