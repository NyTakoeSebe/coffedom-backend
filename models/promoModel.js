import mongoose from 'mongoose';

const promoModel = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Promo = mongoose.model('Promos', promoModel);

export default Promo;
