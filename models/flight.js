const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
  content: String,
  arrival:Date,
  airport: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
  }
});
	
const flightSchema = new Schema({
  airline: {
    type: String,
    enum:['american', 'southwest', 'united']
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
  },
  destinations: [destinationSchema]
}, {
  timestamps: true
});

module.exports = mongoose.model('Flight', flightSchema);
