const { Product } = require('../models');

const productData = [
  {
    product_name: 'Laptop',
    price: 1200.50,
    stock: 30,
    category_id: 1,
  },
  {
    product_name: 'T-Shirt',
    price: 20.00,
    stock: 100,
    category_id: 2,
  },
  {
    product_name: 'Coffee Maker',
    price: 45.99,
    stock: 15,
    category_id: 3,
  },

];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
