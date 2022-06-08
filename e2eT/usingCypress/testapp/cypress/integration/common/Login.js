import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
let loginPage = require('../page_objects/Login.js');

 

Given('Le navigateur est ouvert et je suis sur la page accueil non connecté', () => {
  cy.server(); 
  cy.visit(Cypress.env('baseURL'));
  loginPage.verifyHomePage();
});

And ('je clique sur login',()=>{

  loginPage.clickIntoLogin();

});


When('Je me connecte en tant que utilisateur {string} avec mon password {string}',(username, password) => {
	
loginPage.login(username,password);

});

Then('la page profile est affichée', () => {
	loginPage.verifProfilePageDisplayed();
	cy.wait(2000);

});


Then('Message erreur {string} est affiché', (message) => {
	
	loginPage.verifAlerteErrrorIsDisplayed(message);
 
});