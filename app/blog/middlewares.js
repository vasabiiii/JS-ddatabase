const Blog = require('./Blog')

const validateBlog = (req, res, next) => {
    let errors = {};
  
    if (!req.body.name || req.body.name.length === 0)
      errors.name = "Имя заполни!";
    if (!req.body.photo || req.body.photo.length === 0)
      errors.photo = "Ссылку на фото заполни!";
    if (!req.body.about || req.body.about.length === 0)
      errors.about = "А содержимое?!";
  
    if (JSON.stringify(errors) !== JSON.stringify({})) {
      res.status(400).json(errors); // Возвращаем ошибки клиенту, если они есть
    } else {
      next(); // Если ошибок нет, передаем управление следующему middleware или обработчику маршрута
    }
  };
  

  const isAuthorOfBlog = async(req,res,next)=>{
      const id = req.params.id || req.body.id
  
      const blog = await Blog.findByPk(id)
      if(!blog) res.status(400).send({message: "Blog with that id is exist"})
      else if( req.user.id===blog.userId) next()
      else res.status(403).send({message: "Access Forbiden"})
    }

  module.exports = {
    validateBlog,
    isAuthorOfBlog
  };
  