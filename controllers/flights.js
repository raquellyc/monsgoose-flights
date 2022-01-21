const res = require('express/lib/response');
const Flight = require('../models/flight')

module.exports = {
    index,
    show,
    new: newFlight,
    create,
};

function index(req, res) {
    Flight.find({}, function(err, flights){
        res.render('flights/index', { title: 'All Flights', flights});
    });
}

function show() {
    Flight.findById(req.params.id)
    // flight.push(req.body);
    res.render('flight/show', {title: 'Flight Detail', flight});
}

function newFlight(req, res) {
    res.render('flights/new', { title: 'Add Flight' });
}

function create(req, res) {
    const flight = new Flight(req.body);
    flight.save(function(err) {
      // one way to handle errors
      if (err) return res.render('flights/new');
      console.log(flight);
      // for now, redirect right back to new.ejs
      res.redirect('/flights/new');
    });
}

