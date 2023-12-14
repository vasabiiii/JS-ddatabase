const Role = require('./Role')


const isUser =async (req, res, next)=>{
    if(req.user ){
        const role = await Role.findByPk(req.user.roleId)

        if(role.name === 'user') next()
        else res.status(403).send({message: 'Access defined'})
    }
    else res.status(403).send({message:"Unauthorized"})
}


const isAdmin =async (req, res, next)=>{
    if(req.user ){
        const role = await Role.findByPk(req.user.roleId)

        if(role.name === 'admin') next()
        else res.status(403).send({message: 'Access defined'})
    }
    else res.status(403).send({message:"Unauthorized"})
}

module.exports={
   
    isUser,
    isAdmin
}