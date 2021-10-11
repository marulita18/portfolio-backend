"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class orderWine extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      orderWine.belongsTo(models.order);
      orderWine.belongsTo(models.wine);
      // define association here
    }
  }
  orderWine.init(
    {
      orderId: DataTypes.INTEGER,
      wineId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "orderWine",
    }
  );
  return orderWine;
};
