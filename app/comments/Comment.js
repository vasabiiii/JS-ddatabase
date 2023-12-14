const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');
const Post = require('../Posts/models/Post')


const Comment = sequelize.define('Comment', {
  text: {
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
},



);

Comment.belongsTo(Post, {foreignKey: 'postId'})



module.exports = Comment;