const mongoose = require('mongoose')
const app = require("./app")

const port = 3000

mongoose
    .connect('mongodb://127.0.0.1:27017/madeWithLove-backend')
    .then(()=>{
        app.listen(port, ()=>{
            console.log(`Server started on port ${port}`)
            console.log("MongoDB Connected")
        })
    }).catch((error)=>{
        console.log(error.message)
    })