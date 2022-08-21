import express from 'express';
import {
  createAddress,
  getAddresses,
  getAllAddresses,
} from '../controllers/addresses/addressController.js';
import { createCity, getCities } from '../controllers/addresses/cityController.js';
import checkAuth from '../middlewares/checkAuth.js';

const router = express.Router();

router.route('/addresses').post(checkAuth, createAddress).get(getAllAddresses);
router.route('/addresses/:cityId').get(getAddresses);
router.route('/cities').post(checkAuth, createCity).get(getCities);

export default router;
