const Reservation = require('../models/Reservation');

exports.index = async (req, res) => {
  const reservations = await Reservation.findAll();
  res.render('reservations/index', { reservations, msg: req.query.msg || null });
};

exports.createView = async (req, res) => {
  const { clients, chambres } = await Reservation.listsForCreate();
  res.render('reservations/create', { clients, chambres, msg: req.query.msg || null });
};

exports.create = async (req, res) => {
  try {
    await Reservation.create(req.body);
    res.redirect('/reservations?msg=Réservation créée');
  } catch (e) {
    res.status(400).send('Erreur création réservation: ' + e.message);
  }
};

exports.editView = async (req, res) => {
  const r = await Reservation.findById(req.params.id);
  if (!r) return res.status(404).send('Réservation introuvable');
  const { clients, chambres } = await Reservation.listsForCreate();
  res.render('reservations/edit', { r, clients, chambres, msg: req.query.msg || null });
};

exports.edit = async (req, res) => {
  try {
    const ok = await Reservation.update(req.params.id, req.body);
    if (!ok) return res.status(404).send('Réservation introuvable');
    res.redirect('/reservations?msg=Réservation modifiée');
  } catch (e) {
    res.status(400).send('Erreur modification réservation: ' + e.message);
  }
};

exports.destroy = async (req, res) => {
  try {
    const ok = await Reservation.remove(req.params.id);
    if (!ok) return res.status(404).send('Réservation introuvable');
    res.redirect('/reservations?msg=Réservation supprimée');
  } catch (e) {
    res.status(400).send('Erreur suppression réservation: ' + e.message);
  }
};