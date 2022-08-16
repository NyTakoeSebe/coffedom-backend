import mongoose from 'mongoose';
import asyncHandler from 'express-async-handler';
import Cart from '../../models/cartModel.js';

export const createCart = asyncHandler(async (req, res) => {
  try {
    const cart = await Cart.create({
      userId: req.userId,
      items: req.body.items,
    });

    res.json(cart);
  } catch (error) {
    res.status(500).json({
      message: 'Ошибка при создании корзины пользователя',
    });
  }
});

export const getCartByUserId = asyncHandler(async (req, res) => {
  try {
    const cart = await Cart.find({ userId: req.userId });
    res.json(cart);
  } catch (error) {
    res.status(500).json({
      message: 'Ошибка при получении корзины пользователя',
    });
  }
});

export const updateCartByUserId = asyncHandler(async (req, res) => {
  try {
    await Cart.updateOne(
      {
        userId: req.userId,
      },
      {
        items: req.body.items,
      },
    );

    res.json({
      message: 'Удача',
    });
  } catch (error) {
    res.status(500).json({
      message: 'Ошибка при обновлении корзины пользователя',
    });
  }
});
