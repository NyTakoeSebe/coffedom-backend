import express from 'express';
import {
  createUserPreset,
  deleteUserPreset,
  getUserPresets,
  updateUserPreset,
} from '../controllers/userPresets/userPresetsController.js';
import checkAuth from '../middlewares/checkAuth.js';

const router = express.Router();

router.route('/').post(checkAuth, createUserPreset).get(checkAuth, getUserPresets);

router.route('/:id').put(checkAuth, updateUserPreset).delete(checkAuth, deleteUserPreset);

export default router;
