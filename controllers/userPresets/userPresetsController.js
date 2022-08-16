import asyncHandler from 'express-async-handler';
import UserPreset from '../../models/userPresetModel.js';

export const createUserPreset = asyncHandler(async (req, res) => {
  try {
    const userPreset = await UserPreset.create({
      userId: req.userId,
      title: req.body.title,
      products: req.body.products,
      time: req.body.time,
      day: req.body.day,
      auto: req.body.auto,
      price: req.body.price,
    });

    res.json(userPreset);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Ошибка при создании набора пользователя',
    });
  }
});

export const getUserPresets = asyncHandler(async (req, res) => {
  try {
    const userPresets = await UserPreset.find({ userId: req.userId });

    res.json(userPresets);
  } catch (error) {
    res.status(500).json({
      message: 'Ошибка при получении наборов пользователя',
    });
  }
});

export const updateUserPreset = asyncHandler(async (req, res) => {
  try {
    await UserPreset.updateOne(
      { _id: req.params.id },
      {
        title: req.body.title,
        products: req.body.products,
        time: req.body.time,
        day: req.body.day,
        auto: req.body.auto,
        price: req.body.price,
      },
    );

    res.json({
      message: 'Удача',
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Ошибка при обновлении набора пользователя',
    });
  }
});

export const deleteUserPreset = asyncHandler(async (req, res) => {
  try {
    await UserPreset.deleteOne({ _id: req.params.id });

    res.json({
      message: 'Удача',
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Ошибка при удалении набора пользователя',
    });
  }
});
