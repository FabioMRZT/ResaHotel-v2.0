// Importer express
const express = require('express');
const app = express();

// Définir le port (3000 par défaut)
const PORT = 3000;

// Route GET sur le chemin "/" (la racine)
app.get('/', (req, res) => {
  res.send('Bienvenue sur la page d’accueil !');
});

// Lancer le serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
