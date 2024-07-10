const express = require('express')
const router = express.Router()

//middleware
const {checkIsUndefinedFunc} =  require('./helpers/checkIsUndefined')
const {checkIsEmptyFunc} = require('./helpers/checkIsEmpty')
const {authMiddlewareFunc} = require('./helpers/authMiddleware')


const {signUp, signIn, getUserById, updateUser} = require('./controller/userController')

const {checkJwtToken} = require('../utils/jwtMiddleware')




router.get('/', (req, res)=>{
    res.json({message: 'connected to app'})
})


router.post('/sign-up', 
    checkIsUndefinedFunc, 
    checkIsEmptyFunc, 
    authMiddlewareFunc,
    signUp)

router.post('/login', 
    checkIsUndefinedFunc, 
    checkIsEmptyFunc, 
    signIn)

router.get('/get-user-by-id/:id', 
    checkJwtToken, 
    getUserById)

router.put('/update-user', checkJwtToken, updateUser)

module.exports = router