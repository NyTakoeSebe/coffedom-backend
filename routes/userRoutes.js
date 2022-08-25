import express from 'express';
import {
  register,
  login,
  getUsers,
  updateUser,
  deleteUser,
  getUserById,
} from '../controllers/user/userController.js';
import checkAuth from '../middlewares/checkAuth.js';

const router = express.Router();

router.route('/reg').post(register);
router.route('/auth').post(login).get(checkAuth, getUserById);
router.route('/').get(getUsers);
router.route('/').put(checkAuth, updateUser).delete(checkAuth, deleteUser);

export default router;
