import express from 'express';
import { createProduct, getProducts } from '../controllers/products/productController.js';
import checkAuth from '../middlewares/checkAuth.js';

const router = express.Router();

router.route('/').post(checkAuth, createProduct).get(getProducts);

export default router;
