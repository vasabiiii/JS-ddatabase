const express = require('express')
const router = express.Router()
const {createBlog, getMyBlogs, editBlog, getBlog, deleteBlog} = require('./controllers')
const{isUser} = require('../auth/middlewares')
const passport = require('passport')
const {validateBlog, isAuthorOfBlog } = require('./middlewares')

router.post('/api/blog',passport.authenticate('jwt', {session:false}),isUser, validateBlog, createBlog)
router.get('/api/blog',passport.authenticate('jwt', {session:false}),isUser, getMyBlogs)
router.get('/api/blog/:id',passport.authenticate('jwt', {session:false}), getBlog)
router.delete('/api/blog/:id',passport.authenticate('jwt', {session:false}),isUser, isAuthorOfBlog, deleteBlog )
router.put('/api/blog',passport.authenticate('jwt', {session:false}),isUser, isAuthorOfBlog,validateBlog, editBlog )

module.exports=router