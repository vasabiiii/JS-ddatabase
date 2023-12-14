const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');
const User = require('../auth/User');
const Country = require('../region/Country');

const Blog = sequelize.define('Blog', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  photo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  about: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  citizenship: {
    type: DataTypes.INTEGER,
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
  userId: { // Добавляем колонку userId
    type: DataTypes.INTEGER,
    allowNull: true,
  },
});

// Добавляем ассоциацию с моделью User
Blog.belongsTo(User, { foreignKey: 'userId' });
Blog.belongsTo(Country, { foreignKey: 'citizenship' });

module.exports = Blog;
