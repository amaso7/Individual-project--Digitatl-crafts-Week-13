'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pt extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Pt.init({
    name: DataTypes.STRING,
    dob: DataTypes.DATE,
    provider: DataTypes.STRING,
    prevappt: DataTypes.DATE,
    nextappt: DataTypes.DATE,
    meds: DataTypes.STRING,
    num: DataTypes.STRING,
    msg: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Pt',
  });
  return Pt;
};