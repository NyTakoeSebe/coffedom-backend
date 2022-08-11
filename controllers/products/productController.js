import asyncHandler from 'express-async-handler';
import Product from '../../models/productModel.js';

export const createProduct = asyncHandler(async (req, res) => {
  try {
    const { title, price, categoryId, rating, settings, imageUrl } = req.body;

    const product = await Product.create({
      title,
      price,
      categoryId,
      rating,
      settings,
      imageUrl,
    });

    res.json(product);
  } catch (error) {
    res.status(500).json({
      message: 'При создании товара произошла ошибка',
    });
  }
});

export const getProducts = asyncHandler(async (req, res) => {
  try {
    const query = {};

    if (req.query.categoryId && Number(req.query.categoryId) !== 0) {
      query['categoryId'] = Number(req.query.categoryId);
    }

    const product = await Product.find(query)
      .limit(req.query.limit)
      .sort({ [req.query.sort]: 'desc' });
    res.json(product);
  } catch (error) {
    res.status(404).json({
      message: 'Ошибка при получении товаров',
    });
  }
});
