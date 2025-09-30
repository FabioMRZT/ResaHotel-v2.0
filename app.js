const express = require('express');
const path = require('path');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Navbar de base
app.get('/', (req, res) => res.redirect('/clients'));

app.use('/clients', require('./routes/clients'));
app.use('/reservations', require('./routes/reservations'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Serveur http://localhost:${PORT}`));