// seeders/20230803120000-countries.js
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Countries', [
      { name: 'Russia' },
      { name: 'Ukraine' },
      { name: 'Belarus' },
      { name: 'Kazakhstan' },
      { name: 'Armenia' },
      { name: 'Azerbaijan' },
      { name: 'Georgia' },
      { name: 'Kyrgyzstan' },
      { name: 'Moldova' },
      { name: 'Tajikistan' },
      { name: 'Turkmenistan' },
      { name: 'Uzbekistan' },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Countries', null, {});
  }
};