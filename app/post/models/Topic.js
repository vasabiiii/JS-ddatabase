const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/db');
const TopicType = require('./TopicType')

const Topic = sequelize.define('Topic', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
 
  
},{
    timestamps:false
}

);

Topic.belongsTo(TopicType, {foreignKey: 'topicTypeId'})
TopicType.hasMany(Topic, {
  foreignKey: 'topicTypeId',
  as: "topic"
})


module.exports = Topic;