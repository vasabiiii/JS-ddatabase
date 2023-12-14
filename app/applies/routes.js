const express = require('express')
const router = express.Router()
const passport = require('passport')
const {createApply, getAllApplies, deleteApply} = require('./controllers')
const {isUser} = require('../auth/middlewares')


router.post('/api/applies',passport.authenticate('jwt', {session:false}) ,isUser, createApply)
router.get('/api/applies/user',passport.authenticate('jwt', {session:false}) ,isUser, getAllApplies)
router.delete('/api/applies/:id',passport.authenticate('jwt', {session:false}),isUser, deleteApply)



module.exports=router