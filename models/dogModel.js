const mongoose = require('mongoose');

const dogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A dog must have a name'],
  },
  gender: String,
  size: String,
  date_of_arrival: Date,
  description: {
    type: String,
    trim: true,
  },
  img: { type: String },
  shvav: Number,
});

const Dog = mongoose.model('Dog', dogSchema);

module.exports = Dog;
