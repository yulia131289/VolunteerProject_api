const mongoose = require('mongoose');

const dateSchema = new mongoose.Schema({
  date: Date,
  walkingHours: String,
  sittingHours: String,
  walkingUsers: {},
  sittingUsers: {},
});

const CalendarDate = mongoose.model('CalendareDate', dateSchema);

module.exports = CalendarDate;
