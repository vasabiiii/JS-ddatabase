
const validateComm = (req,res,next)=>{
    let errors = {};
  
    if (!req.body.postId || req.body.postId.length === 0)
      errors.postId = "Номер поста заполни!";
    if (!req.body.text || req.body.text.length === 0)
      errors.text = "А текст?";
    
    if (JSON.stringify(errors) !== JSON.stringify({})) {
      res.status(400).json(errors); // Возвращаем ошибки клиенту, если они есть
    } else {
      next(); // Если ошибок нет, передаем управление следующему middleware или обработчику маршрута
    }
}




module.exports={
    validateComm,
}