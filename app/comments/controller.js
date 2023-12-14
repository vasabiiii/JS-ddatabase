const Comment = require('./Comment')
const sendMail = require('../utils/sendMail')
const Post = require('../Posts/models/Post')
const User = require('../auth/User')
const {Op} = require('sequelize')
const { post } = require('./router')

const createComment = async(req,res)=>{
        const comm =await Comment.create({
            postId: req.body.postId,
            text: req.body.text
        })

        res.status(200).send(comm)
}

const getComment = async (req,res)=>{
    const posts = await Post.findAll({
        where:{
            userId: req.user.id
        }
    })

    const ids = posts.map(item => item.id)

    const comm = await Comment.findAll({
        where:{
            postId:{[Op.in]:ids}
        }
    })

    res.status(200).send(comm)
}



module.exports={
    createComment,
    getComment
}