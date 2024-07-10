const express = require('express')
const logger = require('morgan')
const cors = require('cors')

const app = express()

const userRouter = require('./routes/user/userRouter')
const recipeRouter = require('./routes/recipes/recipeRouter')

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use('/user', userRouter)
app.use("/recipe", recipeRouter)


// app.get('/')

module.exports = app