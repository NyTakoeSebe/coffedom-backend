import asyncHandler from 'express-async-handler';
import Promo from '../../models/promoModel.js';

export const createPromo = asyncHandler(async (req, res) => {
  try {
    const { title, text, imageUrl } = req.body;

    const promo = await Promo.create({
      title,
      text,
      imageUrl,
    });

    res.json(promo);
  } catch (error) {
    res.status(500).json({
      message: 'При создании акции произошла ошибка',
    });
  }
});

export const getPromos = asyncHandler(async (req, res) => {
  try {
    const promos = await Promo.find().limit(req.query.limit);

    res.json(promos);
  } catch (error) {
    res.status(404).json({
      message: 'Ошибка при получении акций',
    });
  }
});
