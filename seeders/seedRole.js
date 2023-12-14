const Role = require('../app/auth/Role')



module.exports={
    up:async(queryInterface, Sequelize)=>{
        await Role.bulkCreate([
            {name: 'user'},
            {name: 'admin'},
        ])
    },
    down: async(queryInterface,Sequelize)=>{
        await queryInterface.bulkDelete('Roles', null, {})
    }
}