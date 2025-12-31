const products = [
  // APPARELS
  { name: 'Phantom Compression Tee', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800', description: 'Elite dry-fit compression.', brand: 'MFI', category: 'Apparels', price: 35.99, countInStock: 20, color: 'Black' },
  { name: 'Arctic Training Shorts', image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=800', description: 'High-stretch mobility shorts.', brand: 'MFI', category: 'Apparels', price: 28.00, countInStock: 15, color: 'Blue' },
  { name: 'Zenith Yoga Leggings', image: 'https://images.unsplash.com/photo-1506629082923-f9ad3f27a13f?w=800', description: 'Buttery soft high-waist fit.', brand: 'MFI', category: 'Apparels', price: 42.50, countInStock: 12, color: 'Black' },
  { name: 'Crimson Velocity Hoodie', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800', description: 'Insulated pre-workout warmth.', brand: 'MFI', category: 'Apparels', price: 55.00, countInStock: 8, color: 'Red' },
  { name: 'Onyx Gym Joggers', image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?w=800', description: 'Tapered fit for maximum agility.', brand: 'MFI', category: 'Apparels', price: 48.00, countInStock: 10, color: 'Grey' },
  { name: 'Snow Performance Tank', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800', description: 'Ultra-light breathable tank.', brand: 'MFI', category: 'Apparels', price: 22.99, countInStock: 25, color: 'White' },
  
  // SUPPLEMENTS
  { name: 'MFI Whey Isolate (2kg)', image: 'https://images.unsplash.com/photo-1593095191071-827c85df56fc?w=800', description: '26g Protein, 0g Sugar.', brand: 'MFI Nutrition', category: 'Supplements', price: 69.99, countInStock: 30, color: 'N/A' },
  { name: 'Crea-Blast Monohydrate', image: 'https://images.unsplash.com/photo-1579722820308-d74e5719d0a8?w=800', description: 'Pure energy & recovery.', brand: 'MFI Nutrition', category: 'Supplements', price: 29.99, countInStock: 50, color: 'N/A' },
  { name: 'Vegan Plant Protein', image: 'https://images.unsplash.com/photo-1546483875-ad9014c88eba?w=800', description: 'Organic pea & rice blend.', brand: 'MFI Nutrition', category: 'Supplements', price: 45.00, countInStock: 20, color: 'N/A' },
  { name: 'Pre-Ignite Orange Burst', image: 'https://images.unsplash.com/photo-1622467827417-640e5365513a?w=800', description: 'Explosive pump formula.', brand: 'MFI Nutrition', category: 'Supplements', price: 34.00, countInStock: 40, color: 'N/A' },
  { name: 'Multi-Vit Daily Pack', image: 'https://images.unsplash.com/photo-1550572017-ed2001593037?w=800', description: 'Essential nutrients for athletes.', brand: 'MFI Nutrition', category: 'Supplements', price: 19.99, countInStock: 100, color: 'N/A' },

  // EQUIPMENT
  { name: 'Elite 10kg Dumbbells', image: 'https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?w=800', description: 'Rubber hex grip design.', brand: 'MFI Gear', category: 'Equipment', price: 95.00, countInStock: 6, color: 'Black' },
  { name: 'Heavy Duty Resistance Bands', image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800', description: '3-level strength bands.', brand: 'MFI Gear', category: 'Equipment', price: 24.00, countInStock: 40, color: 'Blue' },
  { name: 'Pro Yoga Mat', image: 'https://images.unsplash.com/photo-1592432678016-e910b452f9a2?w=800', description: '6mm non-slip cushioning.', brand: 'MFI Gear', category: 'Equipment', price: 38.00, countInStock: 15, color: 'Grey' },
  { name: 'Adjustable Kettlebell', image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=800', description: 'Space-saving home equipment.', brand: 'MFI Gear', category: 'Equipment', price: 120.00, countInStock: 4, color: 'Red' },
  { name: 'MFI Speed Jump Rope', image: 'https://images.unsplash.com/photo-1434608519344-49d77a699e1d?w=800', description: 'Steel cable for rapid cardio.', brand: 'MFI Gear', category: 'Equipment', price: 15.99, countInStock: 60, color: 'Black' },
  { name: 'Weightlifting Belt', image: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=800', description: 'Genuine leather support.', brand: 'MFI Gear', category: 'Equipment', price: 49.99, countInStock: 10, color: 'Black' },
  { name: 'Foam Roller Pro', image: 'https://images.unsplash.com/photo-1591258382457-d5ad29c66431?w=800', description: 'Deep tissue recovery tool.', brand: 'MFI Gear', category: 'Equipment', price: 25.00, countInStock: 22, color: 'Blue' },
  { name: 'Wrist Wraps (Pair)', image: 'https://images.unsplash.com/photo-1549476464-37392f71752a?w=800', description: 'Heavy lifting joint support.', brand: 'MFI Gear', category: 'Equipment', price: 12.50, countInStock: 50, color: 'White' },
  { name: 'MFI Water Gallon', image: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?w=800', description: 'Stay hydrated with 2.2L capacity.', brand: 'MFI Gear', category: 'Equipment', price: 14.99, countInStock: 35, color: 'Black' }
];

export default products;