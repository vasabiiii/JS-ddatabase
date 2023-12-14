const Hobbie = require('./hobbie')
const {Op} = require('sequelize')


const getAllHobbies = async(req,res)=>{
    const hobbies = await Hobbie.findAll()

    res.status(200).send(hobbies)
}

const getHobbiesByKey = async(req,res)=>{
    const hobbies = await Hobbie.findAll({
        where:{
            name:{
                [Op.like]: `%${req.params.key}%`
            }
        }
    })

    res.status(200).send(hobbies)
}



module.exports={
    getAllHobbies,
    getHobbiesByKey
}