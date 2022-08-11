import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';

import productRoutes from './routes/productRoutes.js';
import promoRoutes from './routes/promoRoutes.js';
import addressRoutes from './routes/addressRoutes.js';
import presetRoutes from './routes/presetRoutes.js';

import { connectDB } from './db.js';

dotenv.config();

connectDB();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());

app.use('/api/products', productRoutes);
app.use('/api/promos', promoRoutes);
app.use('/api/addresses', addressRoutes);
app.use('/api/presets', presetRoutes);

app.listen(PORT, console.log(`Server started `.blue.bold));
