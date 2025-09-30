const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/clientController');

// GET : /clients (liste + formulaire de création)
router.get('/', ctrl.index);

// POST : /clients (ajout)
router.post('/', ctrl.create);

// GET : /clients/:id/edit (vue édition)
router.get('/:id/edit', ctrl.editView);

// POST : /clients/:id/edit (modifier)
router.post('/:id/edit', ctrl.edit);

// POST : /clients/:id/delete (supprimer)
router.post('/:id/delete', ctrl.destroy);

module.exports = router;
