const express = require('express');

const morgan = require('morgan');

const AppError = require('./utils/appError');
const dogRouter = require('./routes/dogRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

//Middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());

//Routes

app.use('/api/v1/dogs', dogRouter);
app.use('/api/v1/users', userRouter);

//handling unhandled routs
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

//error handling middleware
app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
});

module.exports = app;
