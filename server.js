const express = require('express')
const logger = require('morgan')
const path = require('path')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const methodOverride = require('method-override')
const session = require('express-session')
const passport = require('passport')

const app = express();
require('dotenv').config();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
    session({
        key: process.env.SECRET_KEY,
        secret: process.env.SECRET_KEY,
        resave: false,
        saveUninitialized: true,
    }),
);
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static('public'));

app.use((req, res, next) => {
    console.log('-------', req.user, req.path);
    next();
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Chillin on ${PORT} 😎`)
})


const authRoutes = require('./routes/auth-routes')
app.use('/auth', authRoutes)

const electionsRoutes = require('./routes/elections-routes')
app.use('/api/elections', electionsRoutes)

const shareRoutes = require('./routes/share-routes')
app.use('/api/share', shareRoutes)


app.get('*', function (req, res) {
    res.status(404).send({ message: 'Oops! Not found.' });
})
