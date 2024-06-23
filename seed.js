const sequelize = require('./config/connection');
const seedCategories = require('./db/seeds/category-seeds');
const seedProducts = require('./db/seeds/product-seeds');
const seedTags = require('./db/seeds/tag-seeds');
const seedProductTags = require('./db/seeds/product-tag-seeds');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');
  await seedProducts();
  console.log('\n----- PRODUCTS SEEDED -----\n');
  await seedTags();
  console.log('\n----- TAGS SEEDED -----\n');
  await seedProductTags();
  console.log('\n----- PRODUCT TAGS SEEDED -----\n');

  process.exit(0);
};

seedAll();