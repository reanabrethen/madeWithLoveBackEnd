function checkIsUndefinedFunc(req, res, next){
    if(Object.keys(req.body).length === 0){
        return res.status(500).json({message: "Please fill out the form"})
    }else{ //gets it ready to do error check line 5-6
        const errorObj = {}
        res.locals.errorObj = errorObj 
        next()
    }
}

module.exports = {checkIsUndefinedFunc}