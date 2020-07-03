const fs = require('fs');

const dogs = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/dogs.json`)
);

exports.checkID = (req, res, next, val) => {
  const id = req.params.id * 1; //will turn it to number

  const dog = dogs.find((el) => el.id === id);

  if (!dog) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }
  next();
};

exports.getAllTheDogs = (req, res) => {
  res.status(200).json({
    status: 'success',
    results: dogs.length,
    data: {
      dogs,
    },
  });
};

exports.getDogWithID = (req, res) => {
  const id = req.params.id * 1;
  const dog = dogs.find((el) => el.id === id);

  res.status(200).json({
    status: 'success',
    data: {
      dog,
    },
  });
};

exports.postNewDog = (req, res) => {
  const newID = dogs[dogs.length - 1].id + 1;
  const newDog = Object.assign({ id: newID }, req.body);
  dogs.push(newDog);
  fs.writeFile(
    `${__dirname}/dev-data/data/dogs.json`,
    JSON.stringify(dogs),
    (err) => {
      res.status(201).json({
        status: 'success',
        data: { dog: newDog },
      });
    }
  );
};

exports.updateDog = (req, res) => {};
exports.deleteDog = (req, res) => {};
