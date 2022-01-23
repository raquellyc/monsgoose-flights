const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    new: newTicket,
    create,
    addToFlight
};

function addToFlight(req, res) {
    Flight.findById(req.params.flightId, function(err, flight) {
        flight.thetickets.push(req.body.ticketId);
        flight.save(function(err) {
            res.redirect(`/flight/${flight._id}`);
        });
    });
}

function create(req, res) {
    Ticket.create(req.body, function (err, ticket) {
        res.redirect('/tickets/new');
    });
}

function newTicket(req, res) {
    Ticket.findById(req.params.id)
    .populate('flight')
    .exec(function(err, ticket) {
        res.render('tickets/new', {
            title: 'Add Ticket',
            Ticket
        });
    });
}