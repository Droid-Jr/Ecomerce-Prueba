"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Trolley extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Trolley.belongsTo(models.Product, { foreignKey: "product_id" });
      Trolley.belongsTo(models.User, { foreignKey: "user_id" });
    }
  }
  Trolley.init(
    {
      cantidad: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      product_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Trolley",
    }
  );
  return Trolley;
};
