// seeders/20230803120100-cities.js
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const countries = await queryInterface.sequelize.query(
      'SELECT id FROM "Countries";'
    );


    const citiesData = [
      // Города для России
      { name: 'Moscow', countryId: countries[0][0].id },
      { name: 'Saint Petersburg', countryId: countries[0][0].id },
      { name: 'Novosibirsk', countryId: countries[0][0].id },
      { name: 'Yekaterinburg', countryId: countries[0][0].id },

      // Города для Украины
      { name: 'Kyiv', countryId: countries[0][1].id },
      { name: 'Kharkiv', countryId: countries[0][1].id },
      { name: 'Odessa', countryId: countries[0][1].id },
      { name: 'Dnipro', countryId: countries[0][1].id },

      // Города для Беларуси
      { name: 'Minsk', countryId: countries[0][2].id },
      { name: 'Gomel', countryId: countries[0][2].id },
      { name: 'Mogilev', countryId: countries[0][2].id },
      { name: 'Vitebsk', countryId: countries[0][2].id },

      // Города для Казахстана
      { name: 'Nur-Sultan', countryId: countries[0][3].id },
      { name: 'Almaty', countryId: countries[0][3].id },
      { name: 'Shymkent', countryId: countries[0][3].id },
      { name: 'Karaganda', countryId: countries[0][3].id },

      // Города для Армении
      { name: 'Yerevan', countryId: countries[0][4].id },
      { name: 'Gyumri', countryId: countries[0][4].id },
      { name: 'Vanadzor', countryId: countries[0][4].id },
      { name: 'Ejmiatsin', countryId: countries[0][4].id },

      // Города для Азербайджана
      { name: 'Baku', countryId: countries[0][5].id },
      { name: 'Ganja', countryId: countries[0][5].id },
      { name: 'Sumqayit', countryId: countries[0][5].id },
      { name: 'Mingachevir', countryId: countries[0][5].id },

      // Города для Грузии
      { name: 'Tbilisi', countryId: countries[0][6].id },
      { name: 'Kutaisi', countryId: countries[0][6].id },
      { name: 'Batumi', countryId: countries[0][6].id },
      { name: 'Rustavi', countryId: countries[0][6].id },

      // Города для Кыргызстана
      { name: 'Bishkek', countryId: countries[0][7].id },
      { name: 'Osh', countryId: countries[0][7].id },
      { name: 'Jalal-Abad', countryId: countries[0][7].id },
      { name: 'Karakol', countryId: countries[0][7].id },

      // Города для Молдовы
      { name: 'Chisinau', countryId: countries[0][8].id },
      { name: 'Balti', countryId: countries[0][8].id },
      { name: 'Tiraspol', countryId: countries[0][8].id },
      { name: 'Bender', countryId: countries[0][8].id },

      // Города для Таджикистана
      { name: 'Dushanbe', countryId: countries[0][9].id },
      { name: 'Khujand', countryId: countries[0][9].id },
      { name: 'Kulob', countryId: countries[0][9].id },
      { name: 'Qurghonteppa', countryId: countries[0][9].id },

      // Города для Туркменистана
      { name: 'Ashgabat', countryId: countries[0][10].id },
      { name: 'Turkmenabat', countryId: countries[0][10].id },
      { name: 'Daşoguz', countryId: countries[0][10].id },
      { name: 'Mary', countryId: countries[0][10].id },

      // Города для Узбекистана
      { name: 'Tashkent', countryId: countries[0][11].id },
      { name: 'Samarkand', countryId: countries[0][11].id },
      { name: 'Namangan', countryId: countries[0][11].id },
      { name: 'Andijan', countryId: countries[0][11].id },
    ];

    await queryInterface.bulkInsert('Cities', citiesData, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Cities', null, {});
  }
};