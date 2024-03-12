'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class electronHistory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  electronHistory.init({
    path: DataTypes.STRING,
    current: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'electronHistory',
  });
  return electronHistory;
};