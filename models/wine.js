'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class wine extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  wine.init({
    name: DataTypes.STRING,
    picture: DataTypes.STRING,
    price: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    category: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'wine',
  });
  return wine;
};