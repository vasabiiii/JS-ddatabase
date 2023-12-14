const {DataTypes} = require('sequelize')
const sequelize = require('../../config/db')
const Blog = require('./Blog')
const Status = require('../status/Status')

const StatusType = sequelize.define('StatusType',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    
},{
    timestamps:false
})

Blog.belongsToMany(Status, {through:StatusType})
Status.belongsToMany(Blog, {through:StatusType})

module.exports = StatusType