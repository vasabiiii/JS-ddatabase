const express = require('express')
const router = express.Router()
const {getAllHobbies, getHobbiesByKey} = require('./controllers')

router.get('/api/hobbies', getAllHobbies)
router.get('/api/hobbies/:key', getHobbiesByKey)

module.exports=router