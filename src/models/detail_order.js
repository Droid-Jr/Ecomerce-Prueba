'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Detail_order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Detail_order.belongsTo(models.Product, { foreignKey : "product_id"});
      Detail_order.belongsTo(models.Order, { foreignKey : "order_id"});
    }
  }
  Detail_order.init({
    order_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    cantidad: DataTypes.INTEGER,
    unit_price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Detail_order',
  });
  return Detail_order;
};