import express from 'express';
import { createProduct, getProducts } from '../controllers/products/productsController.js';

const router = express.Router();

router.route('/').post(createProduct).get(getProducts);

export default router;
