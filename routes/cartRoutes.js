import express from 'express';
import checkAuth from '../middlewares/checkAuth.js';
import {
  createCart,
  getCartByUserId,
  updateCartByUserId,
} from '../controllers/cart/cartController.js';

const router = express.Router();

router
  .route('/')
  .post(checkAuth, createCart)
  .get(checkAuth, getCartByUserId)
  .put(checkAuth, updateCartByUserId);

export default router;
