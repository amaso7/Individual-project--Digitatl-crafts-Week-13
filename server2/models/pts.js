'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Pts.init({
    name: DataTypes.STRING,
    bithdate: DataTypes.STRING,
    provider: DataTypes.STRING,
    msg: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Pts',
  });
  return Pts;
};