// models/Client.js
const db = require('../config/db');

async function findAll() {
  const [rows] = await db.query('SELECT * FROM clients ORDER BY client_id DESC');
  return rows;
}
async function findById(id) {
  const [rows] = await db.query('SELECT * FROM clients WHERE client_id=?', [id]);
  return rows[0] || null;
}
async function create(d) {
  const { nom, prenom, email, telephone, nombre_personnes } = d;
  const [res] = await db.query(
    'INSERT INTO clients (nom, prenom, email, telephone, nombre_personnes) VALUES (?,?,?,?,?)',
    [nom, prenom, email, telephone, Number(nombre_personnes || 1)]
  );
  return res.insertId;
}
async function update(id, d) {
  const { nom, prenom, email, telephone, nombre_personnes } = d;
  const [res] = await db.query(
    'UPDATE clients SET nom=?, prenom=?, email=?, telephone=?, nombre_personnes=? WHERE client_id=?',
    [nom, prenom, email, telephone, Number(nombre_personnes || 1), id]
  );
  return res.affectedRows > 0;
}
async function remove(id) {
  const [res] = await db.query('DELETE FROM clients WHERE client_id=?', [id]);
  return res.affectedRows > 0;
}

module.exports = { findAll, findById, create, update, remove };