import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import cors from 'cors';

import productRoutes from './routes/productRoutes.js';
import promoRoutes from './routes/promoRoutes.js';
import addressRoutes from './routes/addressRoutes.js';
import presetRoutes from './routes/presetRoutes.js';
import userRoutes from './routes/userRoutes.js';
import cartRoutes from './routes/cartRoutes.js';
import userPresetRoutes from './routes/userPresetRoutes.js';

import { connectDB } from './db.js';

dotenv.config();

connectDB();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/products', productRoutes);
app.use('/api/promos', promoRoutes);
app.use('/api/address', addressRoutes);
app.use('/api/presets', presetRoutes);
app.use('/api/users', userRoutes);
app.use('/api/carts', cartRoutes);
app.use('/api/userPresets', userPresetRoutes);

app.listen(PORT, console.log(`Server started `.blue.bold));
