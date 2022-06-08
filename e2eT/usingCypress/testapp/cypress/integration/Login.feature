Feature: [GESTION DES COMPTES][LOGIN] En tant qu'utilisateur avec mes identifiants valides je pourrais m'authentifier à la plateforme ALLHEARTIST

Background:
Given Le navigateur est ouvert et je suis sur la page accueil non connecté
And je clique sur login



Scenario: [GESTION DES COMPTES] Essayer de se connecter avec un invalide email et valide password
When Je me connecte en tant que utilisateur "wissembendaly95.com" avec mon password "wiss123"
Then Message erreur "Your username or password is incorrect, please enter them again." est affiché

Scenario: [GESTION DES COMPTES] Essayer de se connecter avec un valide email et invalide password
When Je me connecte en tant que utilisateur "wissembendaly95@gmail.com" avec mon password "wiss123"
Then Message erreur "Your username or password is incorrect, please enter them again." est affiché

Scenario: [GESTION DES COMPTES] Essayer de se connecter avec un email existant et un valide password qui ne matchent pas
When Je me connecte en tant que utilisateur "wissembendaly95@gmail.com" avec mon password "wiss12345"
Then Message erreur "Your username or password is incorrect, please enter them again." est affiché

Scenario: [GESTION DES COMPTES]Se connecter avec des identifiants valides
When Je me connecte en tant que utilisateur "wissembendaly@gmail.com" avec mon password "wiss12345"
Then la page profile est affichée