const createError = require('http-errors');
const express = require('express');
const dotenv = require("dotenv");
const path = require('path');
const passport = require("passport")
const session = require('express-session');
const connectDB = require("./config/database");
const cookieParser = require('cookie-parser');
const logger = require('morgan');

require('./config/passport');

// Load config
dotenv.config({ path: "./config/config.env"});

// Passport config
require("./config/passport")(passport);

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


const authRouter = require('./routes/auth.routes');
const indexRouter = require('./routes/index.routes');
const userRouter = require('./routes/user.routes');
const projectRouter = require('./routes/project.routes');
const loginRouter = require('./routes/login.routes');
const profileRouter = require('./routes/profile.routes');
const searchRouter = require('./routes/search.routes');



// Routes
app.use('/auth', authRouter);
app.use('/', indexRouter);
app.use('/u', userRouter);
app.use('/p', projectRouter);
app.use('/s', searchRouter);
app.use('/profile', profileRouter);
app.use('/login', loginRouter);


// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;
