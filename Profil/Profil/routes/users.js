var express = require('express');
var router = express.Router();

const authService = require('../services/authService');



// Route pour inscrire un nouvel utilisateur
router.post('/signup', (req, res) => {
  const { email, password } = req.body;
  
  authService.signUp(email, password)
    .then(userCredential => {
      // L'inscription a réussi, vous pouvez maintenant traiter les données de l'utilisateur
      res.status(201).send({ message: 'Utilisateur créé avec succès', userId: userCredential.user.uid });
    })
    .catch(error => {
      // Une erreur s'est produite lors de l'inscription de l'utilisateur
      res.status(400).send({ error: error.message });
    });
});

// Route pour connecter un utilisateur
router.post('/signin', (req, res) => {
  const { email, password } = req.body;

  authService.signIn(email, password)
    .then(userCredential => {
      // La connexion a réussi
      res.status(200).send({ message: 'Connexion réussie', user: userCredential.user });
    })
    .catch(error => {
      // Une erreur s'est produite lors de la connexion de l'utilisateur
      res.status(401).send({ error: error.message });
    });
});

// Route pour la déconnexion
router.post('/signout', (req, res) => {
  authService.signOut()
    .then(() => {
      res.status(200).send({ message: 'Déconnexion réussie' });
    })
    .catch(error => {
      res.status(500).send({ error: error.message });
    });
});

module.exports = router;
