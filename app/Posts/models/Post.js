const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/db');
const User = require('../../auth/User');
const Country = require('../../region/Country');
const Topic = require('../../post/models/Topic')


const Post = sequelize.define('Post', {
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
Post.belongsTo(User, { foreignKey: 'userId' });
Post.belongsTo(Country, { foreignKey: 'citizenship' });
Post.belongsTo(Topic, { foreignKey: 'topicId' });

module.exports = Post;
