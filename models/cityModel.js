import mongoose from 'mongoose';

const addressModel = mongoose.Schema({
  text: {
    type: String,
    required: true,
    unique: true,
  },
});

const city = mongoose.model('Cities', addressModel);

export default city;
