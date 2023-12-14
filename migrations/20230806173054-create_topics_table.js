'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Topics', {
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
      topicTypeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'TopicTypes', // Имя связанной таблицы (с учетом регистра)
          key: 'id',            // Ключ связи
        },
        onUpdate: 'CASCADE', // Обновление внешнего ключа каскадным образом
        onDelete: 'CASCADE', // Удаление внешнего ключа каскадным образом
      },
      // Добавьте другие поля модели, если они есть
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Topics');
  },
};
