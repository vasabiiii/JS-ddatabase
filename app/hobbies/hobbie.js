const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');

const Hobbie = sequelize.define('Hobbie', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
 
  
},{
    timestamps:false
}

);

module.exports = Hobbie;