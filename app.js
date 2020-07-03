const express = require('express');
const morgan = require('morgan');

const dogRouter = require('./routes/dogRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

//Middleware
app.use(morgan('dev'));
app.use(express.json());

//Routes

app.use('/api/v1/dogs', dogRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
