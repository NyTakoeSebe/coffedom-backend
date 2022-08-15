import mongoose from 'mongoose';

const userModel = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    city: {
      type: Number,
      default: 0,
    },
    address: {
      type: String,
      default: '',
    },
    bonuses: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

const user = mongoose.model('Users', userModel);

export default user;
