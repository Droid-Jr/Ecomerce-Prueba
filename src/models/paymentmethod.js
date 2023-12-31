"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Paymentmethod extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Paymentmethod.hasOne(models.Order, { foreignKey: "payment_id" });
    }
  }
  Paymentmethod.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Paymentmethod",
    }
  );
  return Paymentmethod;
};
