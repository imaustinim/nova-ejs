const createError = require('http-errors');
const express = require('express');
const dotenv = require("dotenv");
const path = require('path');
const connectDB = require("./config/database");
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');

require('./config/passport');

dotenv.config({ path: "./config/config.env"});

connectDB();

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(
  PORT, 
  console.log(`Server running mode in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(session({
//   secret: 'SEIRocks!',
//   resave: false,
//   saveUninitialized: true
// }));
// app.use(express.static(path.join(__dirname, 'public')));

const indexRouter = require('./routes/index.routes');
const userRouter = require('./routes/user.routes');
const projectRouter = require('./routes/project.routes');


// Routes
app.use('/', indexRouter);
app.use('/u', userRouter);
app.use('/p', projectRouter);

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
