import express from 'express';
import { createPreset, getPresets } from '../controllers/presets/presetController.js';
import checkAuth from '../middlewares/checkAuth.js';

const router = express.Router();

router.route('/').post(checkAuth, createPreset).get(getPresets);

export default router;
