import asyncHandler from 'express-async-handler';
import Preset from '../../models/presetModel.js';

export const createPreset = asyncHandler(async (req, res) => {
  try {
    const { title, popular, ordinary, big } = req.body;

    const preset = await Preset.create({
      title,
      popular,
      ordinary,
      big,
    });

    res.json(preset);
  } catch (error) {
    res.status(500).json({
      message: 'При создании акции произошла ошибка',
    });
  }
});

export const getPresets = asyncHandler(async (req, res) => {
  try {
    const presets = await Preset.find().limit(req.query.limit);

    res.json(presets);
  } catch (error) {
    res.status(404).json({
      message: 'Ошибка при получении акций',
    });
  }
});
