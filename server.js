const path = require('path');
const express = require('express');
const dotenv = require("dotenv");
const logger = require('morgan');
const passport = require("passport")
const session = require('express-session');
const MongoDBStore = require("connect-mongodb-session")(session);
const connectDB = require("./config/database");

// Load config
dotenv.config({ path: "./config/config.env"});

// Passport config
require('./config/passport').google(passport);
require('./config/passport').facebook(passport);
require('./config/passport').twitch(passport);

connectDB();

const app = express();
const PORT = process.env.PORT || 3000;
app.listen(
  PORT, 
  console.log(`Server running mode in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

// Session Middleware
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store: MongoDBStore({
        collection: "sessions",
        uri: process.env.DATABASE_URI,
        databaseName: "myFirstDatabase"
    })
}));

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session()); 

// static setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());


const indexRouter = require('./routes/index.routes');
const authRouter = require('./routes/auth.routes');
const userRouter = require('./routes/user.routes');
const projectRouter = require('./routes/project.routes');
const profileRouter = require('./routes/profile.routes');
const searchRouter = require('./routes/search.routes');

// Routes
app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/u', userRouter);
app.use('/p', projectRouter);
app.use('/s', searchRouter);
app.use('/profile', profileRouter);

module.exports = app;
