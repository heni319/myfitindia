import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';

// Middleware & Routes Imports
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import userRoutes from './routes/userRoutes.js';
import productRoutes from './routes/productRoutes.js';

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// 1. Standard Middleware
app.use(cors());
app.use(express.json()); // Essential for Login/Signup (parses JSON body)

// 2. Primary API Routes
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

// 3. Health Check Route
app.get('/', (req, res) => {
  res.send('MFI API is running and healthy...');
});

// 4. Error Handling Middleware (MUST be at the bottom)
app.use(notFound);      // Catches 404s (wrong URLs)
app.use(errorHandler);  // Catches 500s (server errors)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});