const Status = require('./Status')


const getStatus = async(req,res)=>{
    const statuses = await Status.findAll()

    res.status(200).send(statuses)
}



module.exports={
    getStatus,
}