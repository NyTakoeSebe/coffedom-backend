import express from 'express';
import { createAddress, getAddresses } from '../controllers/addresses/addressController.js';

const router = express.Router();

router.route('/').post(createAddress).get(getAddresses);

export default router;
