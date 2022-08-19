import mongoose from 'mongoose';

const presetModel = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    popular: {
      type: Boolean,
      required: true,
    },
    ordinary: {
      items: [
        {
          title: {
            type: String,
            required: true,
          },
          imageUrl: {
            type: String,
            required: true,
          },
          size: {
            type: String,
            required: true,
          },
          amount: {
            type: Number,
            required: true,
          },
        },
      ],
      price: {
        type: Number,
        required: true,
      },
    },
    big: {
      items: [
        {
          title: {
            type: String,
            required: true,
          },
          imageUrl: {
            type: String,
            required: true,
          },
          size: {
            type: String,
            required: true,
          },
          amount: {
            type: Number,
            required: true,
          },
          price: {
            type: Number,
            default: 0,
          },
        },
      ],
      price: {
        type: Number,
        required: true,
      },
    },
  },
  {
    timestamps: true,
  },
);

const preset = mongoose.model('Presets', presetModel);

export default preset;
