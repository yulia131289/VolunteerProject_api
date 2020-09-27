const User = require('../models/userModel');
const CatchAsync = require('../utils/catchAsync');

exports.getAllUsers = CatchAsync(async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({
    status: 'success',
    results: users.length,
    data: users,
  });
});

exports.createUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    data: 'This route is not defined yet',
  });
};

exports.getUserById = (req, res) => {
  res.status(500).json({
    status: 'error',
    data: 'This route is not defined yet',
  });
};

exports.updateUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    data: 'This route is not defined yet',
  });
};

exports.deleteUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    data: 'This route is not defined yet',
  });
};
