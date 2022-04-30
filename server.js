// Installation du serveur express 
import express from "express";
import path from "path";

const app = express();

// Prend en compte seulement les fichiers qui seront build par Angular 
app.use(express.static('./dist/portfolio-website'));

app.get('/*', (req, res) => res.sendFile('index.html', {root: 'dist/portfolio-website'}));

// lancement de l'application sur le port de heroku par défaut 
app.listen(process.env.PORT || 8080);

