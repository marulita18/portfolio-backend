"use strict";
const { Model } = require("sequelize");
const orderwine = require("./orderwine");
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      order.belongsTo(models.user);
      order.belongsToMany(models.wine, {
        through: "orderWines",
        foreignKey: "orderId",
      });
      // define association here
    }
  }
  order.init(
    {
      status: DataTypes.STRING,
      total: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "order",
    }
  );
  return order;
};
