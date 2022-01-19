const mongoose = require('mongoose');

const Schema = mongoose.Schema;

	
const flightSchema = new Schema({
  airline: {
    type: String,
    enum:['American', 'Southwest', 'United']
  },
  flightNo: {
    type: Number,
    max: 9999,
    min: 10
  },
  airport: {
    type: String,
    enum:['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
    default:'DEN'
  },
  departs: {
    type: Date
  }
});

module.exports = mongoose.model('Flight', flightSchema);
