const Flight  = require('../models/flight');

module.exports = {
  create
};

function create(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    // We can push in subdoc objects into Mongoose arrays
    flight.destinations.push(req.body);
    flight.save(function(err) {
      // Step 5: Respond with a redirect because we've mutated data
      res.redirect(`/flights/${flight._id}`);
    });
  });
}