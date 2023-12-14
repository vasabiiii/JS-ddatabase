'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('StatusTypes', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
    }, {
      timestamps: false,
    });

    // Создаем таблицу для связи между Blog и Status
    await queryInterface.createTable('BlogStatusTypes', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      blogId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Blogs',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      statusTypeId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'StatusTypes',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Удаляем таблицу связи Blog и Status
    await queryInterface.dropTable('BlogStatusTypes');

    // Удаляем таблицу StatusTypes
    await queryInterface.dropTable('StatusTypes');
  }
};