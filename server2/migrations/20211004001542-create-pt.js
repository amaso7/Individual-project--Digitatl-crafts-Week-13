'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Pts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      dob: {
        type: Sequelize.DATE
      },
      provider: {
        type: Sequelize.STRING
      },
      prevappt: {
        type: Sequelize.DATE
      },
      nextappt: {
        type: Sequelize.DATE
      },
      meds: {
        type: Sequelize.STRING
      },
      num: {
        type: Sequelize.STRING
      },
      msg: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Pts');
  }
};