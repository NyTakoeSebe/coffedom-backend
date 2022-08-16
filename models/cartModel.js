import mongoose from 'mongoose';

const cartModel = mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  items: [
    {
      imageUrl: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      settings: {
        type: Array,
        default: [],
      },
      price: {
        type: Number,
        required: true,
      },
      amount: {
        type: Number,
        required: true,
      },
    },
  ],
});

const Cart = mongoose.model('Cart', cartModel);

export default Cart;
