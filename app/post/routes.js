const express = require('express')
const router = express.Router()
const {getPosts} = require('./controllers')


router.get('/api/posts', getPosts)


module.exports=router