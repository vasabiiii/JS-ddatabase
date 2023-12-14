const express = require('express')
const router = express.Router()
const {getAllRecomend} = require('./controllers')

router.get('/api/recomendation',(req,res)=>res.status(200).send(['Все','Только подписанные','Только я']))


module.exports=router