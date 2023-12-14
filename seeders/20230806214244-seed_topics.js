// seeders/20230803120000-countries.js
'use strict';

const topicTypes=[
  {
      "id": "1",
      "name": "Информационные технологии, интернет, телеком",
      "specializations": [
          {
              "id": "1.395",
              "name": "Банковское ПО",
              "laboring": false
          },
          {
              "id": "1.400",
              "name": "Оптимизация сайта (SEO)",
              "laboring": false
          },
          {
              "id": "1.420",
              "name": "Администратор баз данных",
              "laboring": false
          },
          
      ]
  },
  {
      "id": "20",
      "name": "Строительство, недвижимость",
      "specializations": [
          {
              "id": "20.396",
              "name": "Эксплуатация",
              "laboring": false
          },
          {
              "id": "20.445",
              "name": "ЖКХ",
              "laboring": false
          },
          {
              "id": "20.484",
              "name": "Геодезия и картография",
              "laboring": false
          },
          
      ]
  },
  
  {
      "id": "26",
      "name": "Закупки",
      "specializations": [
          {
              "id": "26.406",
              "name": "Сертификация",
              "laboring": false
          },
          {
              "id": "26.407",
              "name": "Автомобили, Запчасти",
              "laboring": false
          },
          {
              "id": "26.408",
              "name": "Алкоголь",
              "laboring": false
          },
          
      ]
  },
  {
      "id": "19",
      "name": "Страхование",
      "specializations": [
          {
              "id": "19.421",
              "name": "Актуарий",
              "laboring": false
          },
          {
              "id": "19.430",
              "name": "Урегулирование убытков",
              "laboring": false
          },
          {
              "id": "19.483",
              "name": "Перестрахование",
              "laboring": false
          },
        
      ]
  },
  {
      "id": "23",
      "name": "Юристы",
      "specializations": [
          {
              "id": "23.422",
              "name": "Авторское право",
              "laboring": false
          },
          {
              "id": "23.442",
              "name": "Международное право",
              "laboring": false
          },
          {
              "id": "23.476",
              "name": "Земельное право",
              "laboring": false
          },
        
      ]
  },
  {
      "id": "3",
      "name": "Маркетинг, реклама, PR",
      "specializations": [
          {
              "id": "3.423",
              "name": "Ассистент",
              "laboring": false
          },
          {
              "id": "3.507",
              "name": "Тайный покупатель",
              "laboring": true
          },
          {
              "id": "3.508",
              "name": "Проведение опросов, Интервьюер",
              "laboring": true
          },
         
           
      ]
  },
  {
      "id": "2",
      "name": "Бухгалтерия, управленческий учет, финансы предприятия",
      "specializations": [
          {
              "id": "2.425",
              "name": "Экономист",
              "laboring": false
          },
          {
              "id": "2.434",
              "name": "Планово-экономическое управление",
              "laboring": false
          },
          {
              "id": "2.454",
              "name": "МСФО, IFRS",
              "laboring": false
          },
       
      ]
  },
  {
      "id": "4",
      "name": "Административный персонал",
      "specializations": [
          {
              "id": "4.428",
              "name": "Последовательный перевод",
              "laboring": false
          },
          {
              "id": "4.429",
              "name": "Делопроизводство",
              "laboring": false
          },
          {
              "id": "4.456",
              "name": "Вечерний секретарь",
              "laboring": false
          },
         
      ]
  },
  {
      "id": "16",
      "name": "Государственная служба, некоммерческие организации",
      "specializations": [
          {
              "id": "16.435",
              "name": "НИИ",
              "laboring": false
          },
          {
              "id": "16.569",
              "name": "Архивариус",
              "laboring": false
          },
          {
              "id": "16.570",
              "name": "Атташе",
              "laboring": false
          },
         
      ]
  },
  {
      "id": "11",
      "name": "Искусство, развлечения, масс-медиа",
      "specializations": [
          {
              "id": "11.436",
              "name": "Кино",
              "laboring": false
          },
          {
              "id": "11.745",
              "name": "Корректор, ретушер",
              "laboring": false
          },
          {
              "id": "11.62",
              "name": "Дизайн, графика, живопись",
              "laboring": false
          },
          {
              "id": "11.71",
              "name": "Журналистика",
              "laboring": false
          },
         
      ]
  },
  {
      "id": "9",
      "name": "Высший менеджмент",
      "specializations": [
          {
              "id": "9.448",
              "name": "Юриспруденция",
              "laboring": false
          },
          {
              "id": "9.452",
              "name": "Страхование",
              "laboring": false
          },
          {
              "id": "9.521",
              "name": "Спортивные клубы, Фитнес, Салоны красоты",
              "laboring": false
          },
          
      ]
  },
  {
      "id": "7",
      "name": "Автомобильный бизнес",
      "specializations": [
          {
              "id": "7.455",
              "name": "Шины, Диски",
              "laboring": false
          },
          {
              "id": "7.502",
              "name": "Тонировщик",
              "laboring": true
          },
          {
              "id": "7.503",
              "name": "Автослесарь",
              "laboring": true
          },
          
      ]
  },
  {
      "id": "8",
      "name": "Безопасность",
      "specializations": [
          {
              "id": "8.461",
              "name": "Системы видеонаблюдения",
              "laboring": false
          },
          {
              "id": "8.462",
              "name": "Взыскание задолженности, Коллекторская деятельность",
              "laboring": false
          },
          {
              "id": "8.519",
              "name": "Инкассатор",
              "laboring": true
          },
          {
              "id": "8.575",
              "name": "Пожарная безопасность",
              "laboring": false
          },
        
      ]
  },
  {
      "id": "10",
      "name": "Добыча сырья",
      "specializations": [
          {
              "id": "10.470",
              "name": "Бурение",
              "laboring": false
          },
          {
              "id": "10.471",
              "name": "Маркшейдер",
              "laboring": false
          },
          {
              "id": "10.472",
              "name": "Газ",
              "laboring": false
          },
      
      ]
  },
  {
      "id": "22",
      "name": "Туризм, гостиницы, рестораны",
      "specializations": [
          {
              "id": "22.491",
              "name": "Повар",
              "laboring": true
          },
          {
              "id": "22.504",
              "name": "Хостес",
              "laboring": true
          },
          {
              "id": "22.505",
              "name": "Швейцар",
              "laboring": true
          },
        
      ]
  },
  {
      "id": "24",
      "name": "Спортивные клубы, фитнес, салоны красоты",
      "specializations": [
          {
              "id": "24.492",
              "name": "Массажист",
              "laboring": true
          },
          {
              "id": "24.493",
              "name": "Парикмахер",
              "laboring": true
          },
          {
              "id": "24.624",
              "name": "Ногтевой сервис",
              "laboring": true
          },
         
      ]
  },
  {
      "id": "29",
      "name": "Рабочий персонал",
      "specializations": [
          {
              "id": "29.495",
              "name": "Грузчик",
              "laboring": true
          },
          {
              "id": "29.510",
              "name": "Слесарь",
              "laboring": true
          },
          {
              "id": "29.511",
              "name": "Токарь, Фрезеровщик",
              "laboring": true
          },
         
      ]
  },
  {
      "id": "27",
      "name": "Домашний персонал",
      "specializations": [
          {
              "id": "27.496",
              "name": "Воспитатель, Гувернантка/гувернёр, Няня",
              "laboring": true
          },
          {
              "id": "27.497",
              "name": "домработница/домработник, Горничная",
              "laboring": true
          },
          {
              "id": "27.498",
              "name": "Персональный водитель",
              "laboring": true
          },
          
      ]
  },
  {
      "id": "15",
      "name": "Начало карьеры, студенты",
      "specializations": [
          {
              "id": "15.730",
              "name": "Бухгалтерия",
              "laboring": false
          },
          {
              "id": "15.731",
              "name": "Закупки",
              "laboring": false
          },
          {
              "id": "15.750",
              "name": "Другое",
              "laboring": false
          },
        
      ]
  },
  {
      "id": "25",
      "name": "Инсталляция и сервис",
      "specializations": [
          {
              "id": "25.743",
              "name": "Другое",
              "laboring": false
          },
          {
              "id": "25.381",
              "name": "Сервисный инженер",
              "laboring": false
          },
          {
              "id": "25.382",
              "name": "Руководитель сервисного центра",
              "laboring": false
          },
         
      ]
  },
  {
      "id": "12",
      "name": "Консультирование",
      "specializations": [
          {
              "id": "12.746",
              "name": "Другое",
              "laboring": false
          },
          {
              "id": "12.5",
              "name": "Internet, E-Commerce",
              "laboring": false
          },
          {
              "id": "12.6",
              "name": "Knowledge management",
              "laboring": false
          },
          
      ]
  },
  {
      "id": "14",
      "name": "Наука, образование",
      "specializations": [
          {
              "id": "14.749",
              "name": "Другое",
              "laboring": false
          },
          {
              "id": "14.762",
              "name": "Дошкольное образование",
              "laboring": false
          },
          {
              "id": "14.37",
              "name": "Биотехнологии",
              "laboring": false
          },
       
      ]
  },
  {
      "id": "6",
      "name": "Управление персоналом, тренинги",
      "specializations": [
          {
              "id": "6.758",
              "name": "Другое",
              "laboring": false
          },
          {
              "id": "6.107",
              "name": "Компенсации и льготы",
              "laboring": false
          },
          {
              "id": "6.184",
              "name": "Начальный уровень, Мало опыта",
              "laboring": false
          },
        
      ]
  }
]


const topicTypesUpdated = topicTypes.map(item =>{
  return{
    name: item["name"]
  }
})

let topicUpdated =[]

topicTypes.forEach((item, index) =>{
  item["specializations"].forEach(spec=>{
      topicUpdated.push({
        name: spec["name"],
        topicTypeId: index +1
      })
  })
})




module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('TopicTypes', topicTypesUpdated, {});


    await queryInterface.bulkInsert('Topics', topicUpdated, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('TopicTypes', null, {});
  } 
};