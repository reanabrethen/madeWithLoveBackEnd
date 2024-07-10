const {
    isEmail,
    isAlpha,
    isAlphanumeric, 
    isStrongPassword
} = require('../../utils/authMethods')


function authMiddlewareFunc(req, res, next){
    const {errorObj} = res.locals
    
    if(!isEmail(req.body.email)){
        errorObj.wrongEmailFormat = "Must be a valid email"
    }
    if(!isStrongPassword(req.body.password)){
        errorObj.validPassword = "Password must contain 8 chars, 1 uppercase, 1 lowercase, & 1 special char"
    }
    if(!isAlpha(req.body.firstName) || !isAlpha(req.body.lastName)){
        errorObj.nameError = "First & last name must contain only alpha chars/letters"
    }
    if(!isAlphanumeric(req.body.username)){
        errorObj.usernameError = 'Username must contain only alphanumeric chars'
    }
    next()
}

module.exports = {
    authMiddlewareFunc
}
