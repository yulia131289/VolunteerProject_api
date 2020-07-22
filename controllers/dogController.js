const Dog = require('../models/dogModel');
const APIFeatures = require('../utils/apiFeatures');
const CatchAsync = require('../utils/catchAsync');

exports.getAllDogs = CatchAsync(async (req, res) => {
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

exports.getDogWithID = CatchAsync(async (req, res) => {
  const dog = await Dog.findById(req.params.id);

  res.status(200).json({
    status: 'sucsess',
    data: dog,
  });
});

exports.postNewDog = CatchAsync(async (req, res) => {
  const newDog = await Dog.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      dog: newDog,
    },
  });
});

exports.updateDog = CatchAsync(async (req, res) => {
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

exports.deleteDog = CatchAsync(async (req, res) => {
  await Dog.findByIdAndDelete(req.params.id);

  res.status(204).json({
    status: 'success',
    data: null,
  });
});
