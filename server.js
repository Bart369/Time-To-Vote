const express = require('express')
const logger = require('morgan')
const path = require('path')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const methodOverride = require('method-override')
const session = require('express-session')
const passport = require('passport')

const app = express()
require('dotenv').config()

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Chillin on ${PORT} 😎`)    
})

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(methodOverride('_method'))
app.use(cookieParser())

app.use(express.static('public'))
