const Flight = require('../models/flight')

module.exports = {
    new: newflight,
    create
};

function newFlight(req, res) {
    res.render('flights/new');
}

function create(req, res) {
    req.body.nowShowing =!!req.body.nowshowing;
    req.body.cast = req.body.cast.trim();
    if (req.body.cast) req.body.cast = req.body.cast.split(/\s*,\s*/);
    const flight = new Flight(req.body);
    flight.save(function(err) {
        if (err) return res.render('flights/new');
        console.log(flight);
        res.redirect('/movies/new')
    })
}