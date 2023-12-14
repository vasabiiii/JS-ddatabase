const Post = require('./models/Post')

const createPost = async(req,res)=>{

    
    const post = await Post.create({
        name: req.body.name,
        photo: req.body.photo,
        about: req.body.about,
        topicId: req.body.topicId,
        citizenship: req.body.citizenship,
        userId:req.user.id,

      })

    res.status(200).send(post)
}

const getMyPost = async(req,res)=>{
    const postes = await Post.findAll({
        where:{
            userId: req.user.id
        }
    })
    res.status(200).send(postes)
}

const deletePost = async (req,res) =>{
    const data = await Post.destroy({
        where:{
            id:req.params.id,
        }
    })
    console.log(data)
    res.status(200).end()
}

module.exports ={
    createPost,
    getMyPost,
    deletePost
}