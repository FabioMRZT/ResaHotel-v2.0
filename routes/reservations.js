const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/reservationController');

// GET : /reservations (liste)
router.get('/', ctrl.index);

// GET : /reservations/create (formulaire création avec listes)
router.get('/create', ctrl.createView);

// POST : /reservations (ajout)
router.post('/', ctrl.create);

// GET : /reservations/:id/edit (vue édition)
router.get('/:id/edit', ctrl.editView);

// POST : /reservations/:id/edit (modifier)
router.post('/:id/edit', ctrl.edit);

// POST : /reservations/:id/delete (supprimer)
router.post('/:id/delete', ctrl.destroy);

module.exports = router;