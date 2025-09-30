const db = require('../config/db');

module.exports = {
    // LEFT JOIN pour ne pas planter si une clé de chambre/client est orpheline
    findAll: async () => {
        const [rows] = await db.query(`
      SELECT r.*,
             c.nom AS client_nom, c.prenom AS client_prenom,
             ch.numero AS chambre_numero
      FROM reservations r
      LEFT JOIN clients c ON c.client_id = r.client_id
      LEFT JOIN chambres ch ON ch.chambre_id = r.chambre_id
      ORDER BY r.id DESC
    `);
        return rows;
    },
    findById: async (id) => {
        const [rows] = await db.query(`
      SELECT r.*,
             c.nom AS client_nom, c.prenom AS client_prenom,
             ch.numero AS chambre_numero
      FROM reservations r
      LEFT JOIN clients c ON c.client_id = r.client_id
      LEFT JOIN chambres ch ON ch.chambre_id = r.chambre_id
      WHERE r.id=?
    `, [id]);
        return rows[0] || null;
    },
    // Pour le formulaire /reservations/create
    listsForCreate: async () => {
        const [[clients], [chambres]] = await Promise.all([
            db.query('SELECT client_id, nom, prenom FROM clients ORDER BY nom, prenom'),
            db.query('SELECT chambre_id, numero FROM chambres ORDER BY numero'),
        ]);
        return { clients, chambres };
    },
    create: async (d) => {
        const { client_id, chambre_id, date_arrivee, date_depart, nombre_personnes } = d;
        const [res] = await db.query(`
      INSERT INTO reservations (client_id, chambre_id, date_arrivee, date_depart, nombre_personnes)
      VALUES (?,?,?,?,?)
    `, [client_id, chambre_id, date_arrivee, date_depart, Number(nombre_personnes || 1)]);
        return res.insertId;
    },
    update: async (id, d) => {
        const { client_id, chambre_id, date_arrivee, date_depart, nombre_personnes } = d;
        const [res] = await db.query(`
      UPDATE reservations
      SET client_id=?, chambre_id=?, date_arrivee=?, date_depart=?, nombre_personnes=?
      WHERE id=?
    `, [client_id, chambre_id, date_arrivee, date_depart, Number(nombre_personnes || 1), id]);
        return res.affectedRows > 0;
    },
    remove: async (id) => {
        const [res] = await db.query('DELETE FROM reservations WHERE id=?', [id]);
        return res.affectedRows > 0;
    },
};