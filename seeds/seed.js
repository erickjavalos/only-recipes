const sequelize = require('../config/connection');
const seedsrecipes = require('./preloaded_recipes')
const seedsuser = require('./preloaded_Users.js')

const seedDatabase = async () => {
  await sequelize.sync({force:true})

  // await seedsuser()

  process.exit(0)
};

seedDatabase();
