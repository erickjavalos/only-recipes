const sequelize = require('../config/connection');
const seedsRecipes = require('./preloaded_recipes');
const seedsUser = require('./preloaded_Users');

const seedDatabase = async () => {
  await sequelize.sync({ force:false })

  await seedsUser()

  // await seedsRecipes()

  process.exit(0)
};

seedDatabase();


