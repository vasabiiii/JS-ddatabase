// seeders/20230803120000-countries.js
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Statuses', [
      { name: 'На связи' },
      { name: 'Занят(-а)' },
      { name: 'В школе' },
      { name: 'В кино' },
      { name: 'На работе' },
      { name: 'Низкий уровень заряда' },
      { name: 'Не могу говорить' },
      { name: 'На совещании' },
      { name: 'В спортзале' },
      { name: 'Сплю' },
      { name: 'Не писать' },
      { name: 'В Таджикстане' },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Statuses', null, {});
  }
};