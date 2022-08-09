import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO).then(() => console.log('DB connected'.cyan.bold));
  } catch (error) {
    console.log('DB error', error);
    process.exit(1);
  }
};
