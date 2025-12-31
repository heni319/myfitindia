import asyncHandler from '../utils/asyncHandler.js';
import Product from '../models/productModel.js';

// @desc    Fetch all products (with filtering)
// @route   GET /api/products
// @access  Public
export const getProducts = asyncHandler(async (req, res) => {
  // 1. Get query parameters from the URL
  const { category, color, brand } = req.query;

  // 2. Build a dynamic query object
  let query = {};

  // 3. Only add filters to the query if they aren't 'All' or undefined
  if (category && category !== 'All') {
    query.category = category;
  }

  if (color && color !== 'All') {
    // This allows for case-insensitive matching (e.g., 'black' vs 'Black')
    query.color = { $regex: new RegExp(color, 'i') };
  }
  
  if (brand && brand !== 'All') {
    query.brand = brand;
  }

  // 4. Find products based on the custom query
  const products = await Product.find(query);
  
  res.json(products);
});

// @desc    Fetch single product by ID
// @route   GET /api/products/:id
// @access  Public
export const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});