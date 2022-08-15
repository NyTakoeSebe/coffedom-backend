import express from 'express';
import {
  register,
  login,
  getUsers,
  updateUser,
  deleteUser,
} from '../controllers/user/userController.js';

const router = express.Router();

router.route('/reg').post(register);
router.route('/auth').post(login);
router.route('/').get(getUsers);
router.route('/:id').put(updateUser).delete(deleteUser);

export default router;
