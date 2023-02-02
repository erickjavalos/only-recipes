const sequelize = require('../config/connection');
const seedsrecipes = require('./preloaded_recipes');
const seedsuser = require('./preloaded_Users');

const seedDatabase = async () => {
  await sequelize.sync({force:true})

  await seedsuser()

  await seedsrecipes()

  process.exit(0)
};

seedDatabase();
