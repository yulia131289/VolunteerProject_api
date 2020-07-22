const Dog = require('../models/dogModel');
const APIFeatures = require('../utils/apiFeatures');
const CatchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.getAllDogs = CatchAsync(async (req, res, next) => {
  const features = new APIFeatures(Dog.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();

  const dogs = await features.query;

  res.status(200).json({
    status: 'sucess',
    results: dogs.length,
    data: {
      dogs,
    },
  });
});

exports.getDogWithID = CatchAsync(async (req, res, next) => {
  const dog = await Dog.findById(req.params.id);

  if (!dog) {
    return next(new AppError('No dog found with this ID', 404));
  }

  res.status(200).json({
    status: 'sucsess',
    data: dog,
  });
});

exports.postNewDog = CatchAsync(async (req, res, next) => {
  const newDog = await Dog.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      dog: newDog,
    },
  });
});

exports.updateDog = CatchAsync(async (req, res, next) => {
  const updatedDog = await Dog.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({
    status: 'success',
    data: {
      updatedDog,
    },
  });
});

exports.deleteDog = CatchAsync(async (req, res, next) => {
  await Dog.findByIdAndDelete(req.params.id);

  res.status(204).json({
    status: 'success',
    data: null,
  });
});
