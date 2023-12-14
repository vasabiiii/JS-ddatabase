const sendEmail = require('../utils/sendMail');
const AuthCode = require('./AuthCode');
const User = require('./User')
const Role = require('./Role')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const {jwtOptions} = require('./passport')

// Функция для генерации случайного кода из 10 цифр
function generateRandomCode() {
  const codeLength = 10;
  let code = 'HH';
  
  for (let i = 0; i < codeLength; i++) {
    // Генерируем случайное число от 0 до 9 и добавляем его к коду
    code += Math.floor(Math.random() * 10);
  }
  
  return code;
}

const sendVerificationEmail = async (req, res) => {
  try {
    // Генерируем случайный код
    const code = generateRandomCode();

    // Создаем запись в базе данных с использованием модели AuthCode
    const newAuthCode = await AuthCode.create({
      email: req.body.email,
      code: code,
      valid_till: Date.now() + 120000, // Время действия кода (в данном случае 2 минуты)
    });

    // Отправляем email с кодом
    await sendEmail(req.body.email, "Код авторизации Instagram", code);

    res.status(200).end();
  } catch (error) {
    console.error('Error sending verification email:', error);
    res.status(500).end();
  }
};


const verifyCode = async(req,res)=>{
    console.log(req.body)


    const authCode = await AuthCode.findOne({
      where: {email: req.body.email},
      order:[['valid_till', 'DESC']]
    })
    
    
    if(!authCode){
        res.status(401).send({error:"code is invalid"})
    }else if(new Date(authCode.valid_till).getTime()<Date.now()){
        res.status(401).send({error:"code is invalid"})
    }
    else if(authCode.code !== req.body.code){
      res.status(401).send({error:"code is invalid"})
    }else{
      
      const salt = await bcrypt.genSalt(10)
      const hashedPassword = await bcrypt.hash(req.body.password, salt)
      let user = await User.findOne({where:{email: req.body.email}})
      const role = await Role.findOne({where: {name:'user'}})
      if(!user){
          

          user = await User.create({
            roleId:role.id,
            email: req.body.email,
            phone: req.body.phone,
            full_name:req.body.full_name,
            password:req.body.password
      })
    }

        const token  = jwt.sign({
          id: user.id, 
          email:user.email,
          full_name: user.full_name,
          phone: user.phone,
          role:{
            id:role.id,
            name:role.name
          }
         }, 
         jwtOptions.secretOrKey,{ 
            expiresIn:24*60*60*365
        })

        res.status(200).send( token)
    }



}


const getUsers = async(req,res)=>{
  const users = await User.findAll()

  res.status(200).send(users)
}


const getInfoUser = async (req, res) => {
  try {
    const userinfo = await User.findOne({
      where: {
        email: req.body.email,
        password: req.body.password,
      },
    });

    if (!userinfo) {
      return res.status(401).send({ error: "User not found" });
    }

    res.status(200).send(userinfo);
  } catch (error) {
    res.status(500).send({ error: "Server error" });
  }
};






module.exports = {
  sendVerificationEmail,
  verifyCode,
  getUsers,
  getInfoUser
};