const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');

const Status = sequelize.define('Status', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
 
  
},{
    timestamps:false
}

);

module.exports = Status;