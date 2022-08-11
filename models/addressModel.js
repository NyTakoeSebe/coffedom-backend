import mongoose from 'mongoose';

const addressModel = mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
    addresses: [
      {
        text: {
          type: String,
          required: true,
        },
        shops: {
          phone: {
            type: String,
            required: true,
          },
          status: {
            type: String,
            required: true,
          },
          workTime: {
            type: String,
            required: true,
          },
        },
      },
    ],
  },
  {
    timestamps: true,
  },
);

const address = mongoose.model('Addresses', addressModel);

export default address;
