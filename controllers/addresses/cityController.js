import asyncHandler from 'express-async-handler';
import City from '../../models/cityModel.js';

export const createCity = asyncHandler(async (req, res) => {
  try {
    const { text } = req.body;

    const city = await City.create({
      text,
    });

    res.json(city);
  } catch (error) {
    res.status(500).json({
      message: 'При создании города произошла ошибка',
    });
  }
});

export const getCities = asyncHandler(async (req, res) => {
  try {
    const cities = await City.find();

    res.json(cities);
  } catch (error) {
    res.status(404).json({
      message: 'Ошибка при получении городов',
    });
  }
});
