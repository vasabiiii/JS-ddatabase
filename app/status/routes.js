const express = require('express')
const router = express.Router()
const {getStatus} = require('./controllers')

router.get('/api/status-types', getStatus)


module.exports=router