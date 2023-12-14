const Apply = require('./Apply')
const {NEW}= require('./utils')
const sendMail = require('../utils/sendMail')
const User = require('../auth/User')
const {Op} = require('sequelize')

const createApply = async(req,res)=>{
    const apply = await Apply.create({
        userId:req.body.userId,
        status: NEW
    })
    
    const user = await User.findByPk(req.body.userId)
    sendMail(user.email, `Новая подписка на вашего ${user.full_name}`)
    res.status(200).send(apply)
}

const getAllApplies = async (req,res)=>{
    const users = await User.findAll({
        where:{
            id: req.user.id
        }
    })

    const ids = users.map(item => item.id)

    const applies = await Apply.findAll({
        where:{
            userId:{[Op.in]:ids}
        }
    })

    res.status(200).send(applies)
}

const deleteApply = async (req, res) => {
    await Apply.destroy({
        where:{
            id:req.params.id
        }
    })

    res.status(200).end()
};
  
module.exports = {
    createApply,
    getAllApplies,
    deleteApply,
};
  