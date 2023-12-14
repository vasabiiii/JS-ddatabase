const Blog = require('./Blog')
const Country = require('../region/Country')

const createBlog = async(req,res )=>{

    const blog = await Blog.create({
        name:req.body.name,
        photo:req.body.photo,
        about:req.body.about,
        citizenship:req.body.citizenship,
        userId:req.user.id
        
    })

    res.status(200).send(blog)

}


const getMyBlogs = async(req,res)=>{
    const blogs = await Blog.findAll({where: {userId: req.user.id}})
    res.status(200).send(blogs)
}

const getBlog= async(req,res)=>{
    const blog = await Blog.findByPk(req.params.id,{
        include:{
            
            model:Country
            
            
        }
    })
    res.status(200).send(blog)
}

const deleteBlog = async (req,res) =>{
    const data = await Blog.destroy({
        where:{
            id:req.params.id,
        }
    })
    console.log(data)
    res.status(200).end()
}

const editBlog = async(req,res)=>{
    await Blog.update({
        name:req.body.name,
        photo:req.body.photo,
        about:req.body.about,
        citizenship:req.body.citizenship,
    }, {
        where:{
            id:req.body.id
        }
    })

    res.status(200).end()
    
}


module.exports={
    createBlog,
    getMyBlogs,
    getBlog,
    deleteBlog,
    editBlog
}