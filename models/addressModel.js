import mongoose from 'mongoose';

const addressModel = mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  cityId: {
    type: String,
    required: true,
  },
  desc: {
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
});

const address = mongoose.model('Addresses', addressModel);

export default address;
