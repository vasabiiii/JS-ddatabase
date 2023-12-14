const express = require('express')
const router = express.Router()
const {sendVerificationEmail, verifyCode, getUsers, getInfoUser} = require('./controller')

router.post('/api/auth/sendmail', sendVerificationEmail)
router.post('/api/auth/verifycode', verifyCode)
router.post('/api/auth/getinfo', getInfoUser)
router.get('/api/auth/users', getUsers)


module.exports=router