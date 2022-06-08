Feature: [GESTION DES COMPTES][LOGIN] En tant qu'utilisateur avec mes identifiants valides je pourrais m'authentifier à la plateforme ALLHEARTIST

Background:
Given Le navigateur est ouvert et je suis sur la page accueil non connecté
And je clique sur Register


Scenario: [GESTION DES COMPTES] en tant qu'un utilisateur je peux creer un compte
When je saisit mon nom "testeur"
And je saisit mon prenom "testeur"
And je saisit mon email "testeur@gmail.com"
And je saisit mon username "testeur123"
And je saisit mon mot de passe "testeur123"
And je confirme mon mot de passe "testeur123"
And je coche le checkbox de confirmation
Then je clique sur le bouton singup

Scenario: [GESTION DES COMPTES] en tant qu'un utilisateur je peux me connecter à mon nouveau compte
Given je clique sur login
When Je me connecte en tant que utilisateur "wissembendaly@gmail.com" avec mon password "wiss12345"
Then la page profile est affichée

