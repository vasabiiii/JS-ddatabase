'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('TopicTypes', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      // Добавьте другие поля модели, если они есть
      
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('TopicTypes');
  },
};
