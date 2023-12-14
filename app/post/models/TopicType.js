const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/db');


const TopicType = sequelize.define('TopicType', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
 
  
},{
    timestamps:false
}

);



module.exports = TopicType;