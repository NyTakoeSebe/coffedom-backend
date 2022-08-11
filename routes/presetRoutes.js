import express from 'express';
import { createPreset, getPresets } from '../controllers/presets/presetController.js';

const router = express.Router();

router.route('/').post(createPreset).get(getPresets);

export default router;
