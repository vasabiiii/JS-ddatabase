const express = require('express')
const router = express.Router()
const {createComment, getComment} = require('./controller')
const {isUser} = require('../auth/middlewares')
const passport = require('passport')
const {validateComm} = require('./middleware')


router.post('/api/comments',passport.authenticate('jwt', {session:false}),isUser, validateComm, createComment)
router.get('/api/comments/user',passport.authenticate('jwt', {session:false}),isUser, getComment)


module.exports=router