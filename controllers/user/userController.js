import asyncHandler from 'express-async-handler';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../../models/userModel.js';

export const register = asyncHandler(async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(req.body.password, salt);

    const user = await User.create({
      email: req.body.email,
      name: req.body.name,
      password: passwordHash,
    });

    const token = jwt.sign(
      {
        _id: user._id,
      },
      'takvot11',
      {
        expiresIn: '30d',
      },
    );

    const userData = user._doc;

    res.json({ userData, token });
  } catch (error) {
    res.status(500).json({
      message: 'Ошибка при регистрации',
    });
  }
});

export const login = asyncHandler(async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(403).json({
        message: 'Неверный логин или пароль',
      });
    }

    const isValidPassword = await bcrypt.compare(req.body.password, user._doc.password);

    if (!isValidPassword) {
      return res.status(403).json({
        message: 'Неверный логин или пароль',
      });
    }

    const token = jwt.sign(
      {
        _id: user._id,
      },
      'takvot11',
      {
        expiresIn: '30d',
      },
    );

    const userData = user._doc;

    res.json({ userData, token });
  } catch (error) {
    console.log(error);
    res.status(403).json({
      message: 'Ошибка авторизации',
    });
  }
});

export const getUsers = asyncHandler(async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(404).json({
      message: 'Ошибка при получении пользователей',
    });
  }
});

export const updateUser = asyncHandler(async (req, res) => {
  try {
    await User.updateOne(
      {
        _id: req.params.id,
      },
      {
        email: req.body.email,
        password: req.body.password,
        address: req.body.address,
        city: req.body.city,
        bonuses: req.body.bonuses,
      },
    );

    res.json({ message: 'Удача' });
  } catch (error) {
    res.status(500).json({
      message: 'Ошибка при обновлении данных пользователя',
    });
  }
});

export const deleteUser = asyncHandler(async (req, res) => {
  try {
    await User.deleteOne({ _id: req.params.id });
    res.json({
      message: 'Удача',
    });
  } catch (error) {
    res.status(500).json({
      message: 'Ошибка при удалении пользователя',
    });
  }
});

export const getUserById = asyncHandler(async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    res.json(user);
  } catch (error) {
    res.status(404).json({
      message: 'Ошибка при получении пользователя',
    });
  }
});
