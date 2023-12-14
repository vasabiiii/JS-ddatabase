const nodemailer = require('nodemailer');

  // Создаем транспорт для отправки почты через Gmail
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'abitdinov47@gmail.com', // Здесь укажите вашу почту Gmail
      pass: 'mchqbeswdsffzzis' // Здесь укажите ваш пароль от почты Gmail
    }
  });

 
    // Отправляем email
    function sendEmail( to,subject,text){
    const mailOptions = {
      from: 'abitdinov47@gmail.com', // От кого (укажите ту же почту, что и выше)
      to: to, // Кому (email получателя)
      subject: subject, // Тема письма
      text: text // Текст письма
    };

    transporter.sendMail(mailOptions, function(error,info){
        if(error){
            console.log(error)
        }else{
            console.log('Email sent: '+ info.response)
        }
    })

}

module.exports = sendEmail
