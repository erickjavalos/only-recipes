const sequelize = require('../config/connection');
const seedsrecipes = require('./preloaded_recipes')
const seedsuser = require('./preloaded_Users')

const seedDatabase = async () => {
  await sequelize.sync({force:true})
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedsrecipes()
  console.log('\n-----  RECIPES SEEDED -----\n');
  await seedsuser()
  console.log('\n----- USER SEEDED -----\n');
  process.exit(0)
};

seedDatabase();
