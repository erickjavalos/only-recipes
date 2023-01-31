const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Recipes extends Model {}

Recipes.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    recipes_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    allergens: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    servings: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    preptime: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    cooktime: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    totaltime: {
      type: DataTypes.STRING,
      allowNull: false,
    },  
    instructions: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    difficulty: {
        type: DataTypes.STRING,
        allowNull: false,
      },  
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'recipes',
  }
);

module.exports = Recipes;