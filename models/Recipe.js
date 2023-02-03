const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Recipe extends Model {}

Recipe.init(
  {
    recipe_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'user_id',
      },
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
        type: DataTypes.TEXT('long'),
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
    modelName: 'recipe',
  }
);

module.exports = Recipe;