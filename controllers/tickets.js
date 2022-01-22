const Performer = require('../models/performer');
const Flight = require('../models/flight');

module.exports = {
    new: newTicket,
    create,
    addToFlight
};

function addToFlight(req, res) {
    Flight.findById(req.params.flightId, function(err, flight) {
        flight.addticket.push(req.body.ticketId);
        flight.save(function(err) {
            res.redirect(`/flights/${flight._id}`);
        });
    });
}

function create(req, res) {
    Ticket.create(req.body, function (err, ticket) {
        res.redirect('/tickets/new');
    });
}

function newTicket(req, res) {
    Ticket.find({})
    .sort('name')
    .exec(function (err, Tickets) {
        res.render('tickets/new', {
            title: 'Add Ticket',
            Tickets
        });
    });
}