const Dog = require('../models/dogModel');

exports.getAllDogs = async (req, res) => {
  try {
    const dogs = await Dog.find();

    res.status(200).json({
      status: 'sucess',
      results: dogs.length,
      data: {
        dogs,
      },
    });
  } catch (err) {
    res.status(400).json({
      statis: 'fail',
      message: err,
    });
  }
};

exports.getDogWithID = async (req, res) => {
  try {
    const dog = await Dog.findById(req.params.id);

    res.status(200).json({
      status: 'sucsess',
      data: dog,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.postNewDog = async (req, res) => {
  try {
    const newDog = await Dog.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        dog: newDog,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      data: 'Invalid data send',
    });
  }
};

exports.updateDog = async (req, res) => {
  try {
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
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.deleteDog = async (req, res) => {
  try {
    await Dog.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      data: err,
    });
  }
};
