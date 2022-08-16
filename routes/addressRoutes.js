import express from 'express';
import { createAddress, getAddresses } from '../controllers/addresses/addressController.js';
import checkAuth from '../middlewares/checkAuth.js';

const router = express.Router();

router.route('/').post(checkAuth, createAddress).get(getAddresses);

export default router;
