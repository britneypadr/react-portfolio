const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Electronics',
  },
  {
    category_name: 'Apparel',
  },
  {
    category_name: 'Home Goods',
  },
  {
    category_name: 'Books',
  },
  {
    category_name: 'Outdoor',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
