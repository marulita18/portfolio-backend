"use strict";
const { Model } = require("sequelize");
const orderwine = require("./orderwine");
module.exports = (sequelize, DataTypes) => {
  class wine extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      wine.belongsTo(models.category);
      wine.belongsToMany(models.order, {
        through: "orderWines",
        foreignKey: "wineId",
      });

      // define association here
    }
  }
  wine.init(
    {
      name: DataTypes.STRING,
      picture: DataTypes.STRING,
      price: DataTypes.INTEGER,
      description: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "wine",
    }
  );
  return wine;
};
