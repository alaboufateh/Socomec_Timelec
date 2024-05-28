const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Configuration de la base de données MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'votre_utilisateur_mysql',
  password: 'votre_mot_de_passe_mysql',
  database: 'nom_de_votre_base_de_données'
});

// Connexion à la base de données
connection.connect((err) => {
  if (err) throw err;
  console.log('Connecté à la base de données MySQL');
});

// Middleware pour parser les requêtes JSON
app.use(bodyParser.json());

// Création d'un nouvel enregistrement
app.post('/create', (req, res) => {
  const { nom, email } = req.body;
  const INSERT_QUERY = `INSERT INTO utilisateurs (nom, email) VALUES (?, ?)`;
  connection.query(INSERT_QUERY, [nom, email], (err, results) => {
    if (err) throw err;
    res.send('Utilisateur créé avec succès');
  });
});

// Récupération de tous les enregistrements
app.get('/utilisateurs', (req, res) => {
  const SELECT_ALL_QUERY = 'SELECT * FROM utilisateurs';
  connection.query(SELECT_ALL_QUERY, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Mise à jour d'un enregistrement
app.put('/update/:id', (req, res) => {
  const { nom, email } = req.body;
  const id = req.params.id;
  const UPDATE_QUERY = `UPDATE utilisateurs SET nom = ?, email = ? WHERE id = ?`;
  connection.query(UPDATE_QUERY, [nom, email, id], (err, results) => {
    if (err) throw err;
    res.send('Utilisateur mis à jour avec succès');
  });
});

// Suppression d'un enregistrement
app.delete('/delete/:id', (req, res) => {
  const id = req.params.id;
  const DELETE_QUERY = `DELETE FROM utilisateurs WHERE id = ?`;
  connection.query(DELETE_QUERY, [id], (err, results) => {
    if (err) throw err;
    res.send('Utilisateur supprimé avec succès');
  });
});

// Écoute du serveur sur le port défini
app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
});
