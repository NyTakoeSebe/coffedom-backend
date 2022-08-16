import mongoose from 'mongoose';

const userPresetModel = mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  products: [
    {
      id: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      imageUrl: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      amount: {
        type: Number,
        required: true,
      },
      size: {
        type: String,
        required: true,
      },
    },
  ],
  price: {
    type: Number,
    required: true,
  },
  auto: {
    type: Number,
    required: true,
  },
  day: {
    type: Number,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
});

const UserPreset = mongoose.model('UserPresets', userPresetModel);

export default UserPreset;
