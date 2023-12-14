const express = require('express')
const router = express.Router()
const {createPost, getMyPost, deletePost} = require('./controllers')
const passport = require('passport')
const {isUser} = require('../auth/middlewares')
const {validatePsot, isAuthorOfPost} = require('./middlewares')

router.post('/api/post',passport.authenticate('jwt',{session:false}),isUser,validatePsot ,createPost, )
router.get('/api/post',passport.authenticate('jwt',{session:false}),isUser ,getMyPost, )
router.delete('/api/post/:id',passport.authenticate('jwt', {session:false}),isUser, isAuthorOfPost, deletePost )

module.exports=router