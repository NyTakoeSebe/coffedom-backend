import asyncHandler from 'express-async-handler';
import Address from '../../models/addressModel.js';

export const createAddress = asyncHandler(async (req, res) => {
  try {
    const { text, addresses } = req.body;

    const address = await Address.create({
      text,
      addresses,
    });

    res.json(address);
  } catch (error) {
    res.status(500).json({
      message: 'При создании адреса произошла ошибка',
    });
  }
});

export const getAddresses = asyncHandler(async (req, res) => {
  try {
    const addresses = await Address.find();

    res.json(addresses);
  } catch (error) {
    res.status(404).json({
      message: 'Ошибка при получении адреса',
    });
  }
});
