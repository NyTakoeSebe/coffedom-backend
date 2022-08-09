import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import colors from 'colors';

import productRoutes from './routes/productRoutes.js';

import { connectDB } from './db.js';

dotenv.config();

connectDB();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());

app.use('/api/products', productRoutes);

app.listen(PORT, console.log(`Server started `.blue.bold));