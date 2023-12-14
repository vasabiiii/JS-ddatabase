const express = require('express')
const logger = require('morgan')
const passport = require('passport')

 
const app =express()


app.use(logger('dev'))
app.use(express.urlencoded())
app.use(express.json())
app.use(passport.initialize())


require('./app/auth/passport')

app.use(require('./app/auth/routes'))
app.use(require('./app/region/routes'))
app.use(require('./app/hobbies/routes'))
app.use(require('./app/status/routes'))
app.use(require('./app/recomendation/routes'))
app.use(require('./app/blog/routes'))
app.use(require('./app/post/routes'))
app.use(require('./app/Posts/routes'))
app.use(require('./app/applies/routes'))
app.use(require('./app/comments/router'))

app.listen(3000, ()=>{
    console.log("Server is listening on port 3000")
})