"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Order.hasMany(models.Detail_order, { foreignKey: "order_id" });
      Order.belongsTo(models.Paymentmethod, { foreignKey: "payment_id" });
      Order.belongsTo(models.User, { foreignKey: "user_id" });
      Order.belongsTo(models.Addres, { foreignKey: "addres_id" });
    }
  }
  Order.init(
    {
      user_id: DataTypes.INTEGER,
      payment_id: DataTypes.INTEGER,
      addres_id: DataTypes.INTEGER,
      total: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
