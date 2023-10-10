'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Trolley extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Trolley.belongsTo(models.User, { foreignKey : "user_id"});
      Trolley.belongsTo(models.Product, { foreignKey : "product_id"});
    }
  }
  Trolley.init({
    cantidad: DataTypes.INTEGER,
    user_id: DataTypes.STRING,
    product_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Trolley',
  });
  return Trolley;
};