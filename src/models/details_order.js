"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Details_order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Detail_order.belongsTo(models.Product, { foreignKey: "product_id" });
      Detail_order.belongsTo(models.Order, { foreignKey: "order_id" });
    }
  }
  Details_order.init(
    {
      order_id: DataTypes.INTEGER,
      product_id: DataTypes.INTEGER,
      cantidad: DataTypes.INTEGER,
      unit_price: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Details_order",
    }
  );
  return Details_order;
};
