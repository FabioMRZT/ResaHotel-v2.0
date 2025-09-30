Client contrôler 

const Client = require('../models/Client');

exports.index = async (req, res) => {
  const clients = await Client.findAll();
  res.render('clients/index', { clients, msg: req.query.msg || null });
};

exports.create = async (req, res) => {
  try {
    await Client.create(req.body);
    res.redirect('/clients?msg=Client créé');
  } catch (e) {
    res.status(400).send('Erreur création client: ' + e.message);
  }
};

exports.editView = async (req, res) => {
  const c = await Client.findById(req.params.id);
  if (!c) return res.status(404).send('Client introuvable');
  res.render('clients/edit', { c, msg: req.query.msg || null });
};

exports.edit = async (req, res) => {
  try {
    const ok = await Client.update(req.params.id, req.body);
    if (!ok) return res.status(404).send('Client introuvable');
    res.redirect('/clients?msg=Client modifié');
  } catch (e) {
    res.status(400).send('Erreur modification client: ' + e.message);
  }
};

exports.destroy = async (req, res) => {
  try {
    const ok = await Client.remove(req.params.id);
    if (!ok) return res.status(404).send('Client introuvable');
    res.redirect('/clients?msg=Client supprimé');
  } catch (e) {
    res.status(400).send('Erreur suppression client: ' + e.message);
  }
};