const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');
const User = require('../auth/User');


const Apply = sequelize.define('Apply', {
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
 
});

// Добавляем ассоциацию с моделью User
 Apply.belongsTo(User, { foreignKey: 'userId' });


 // Post.belongsTo(Country, { foreignKey: 'citizenship' });
// Post.belongsTo(Topic, { foreignKey: 'topicId' });

module.exports = Apply;
