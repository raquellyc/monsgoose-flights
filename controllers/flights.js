const Flight = require('../models/flight')

module.exports = {
    index,
    new: newFlight,
    create,
};

function index(req, res) {
    Flight.find({}, function(err,movies){
        res.render('flights/index', { title: 'All Flights', flights});
    });
}

function newFlight(req, res) {
    res.render('flights/new', { title: 'Add Flight' });
}

function create(req, res) {
    req.body.nowShowing =!!req.body.nowshowing;
    req.body.cast = req.body.cast.trim();
    if (req.body.cast) req.body.cast = req.body.cast.split(/\s*,\s*/);
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    const flight = new Flight(req.body);
    flight.save(function(err) {
        if (err) return res.render('flights/new');
        console.log(flight);
        res.redirect('/flights')
    });
}
