"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Addres extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Address.hasMany(models.Order, { foreignKey: "addres_id" });
      Address.belongsTo(models.User, { foreignKey: "user_id" });
    }
  }
  Addres.init(
    {
      calle: DataTypes.STRING,
      ciudad: DataTypes.STRING,
      pais: DataTypes.STRING,
      c_postal: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Addres",
    }
  );
  return Addres;
};
