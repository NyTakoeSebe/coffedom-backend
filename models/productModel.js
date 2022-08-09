import mongoose from 'mongoose';

const productModel = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    categoryId: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    settings: {
      milk: [
        {
          name: {
            type: String,
            required: true,
          },
          price: {
            type: Number,
            required: true,
          },
        },
      ],
      sizes: [
        {
          name: {
            type: String,
            required: true,
          },
          price: {
            type: Number,
            required: true,
          },
        },
      ],
      ingredients: [
        {
          name: {
            type: String,
            required: true,
          },
          price: {
            type: Number,
            required: true,
          },
        },
      ],
    },
    price: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Product = mongoose.model('Products', productModel);

export default Product;
