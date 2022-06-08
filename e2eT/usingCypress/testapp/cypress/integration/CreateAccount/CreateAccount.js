import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
let createAccountPage = require('../page_objects/CreateAccount.js');


Given ('je clique sur Register',()=>{

    createAccountPage.clickIntoRegister();

})

When ('je saisit mon nom {string}',(input)=>{

    createAccountPage.addFirstname(input);

})


When ('je saisit mon prenom {string}',(input)=>{

    createAccountPage.addLastname(input);

})


When ('je saisit mon email {string}',(input)=>{

    createAccountPage.addEmail(input);

})


When ('je saisit mon username {string}',(input)=>{

    createAccountPage.addUsername(input);

})


When ('je saisit mon mot de passe {string}',(input)=>{

    createAccountPage.addPassword(input);

})

When ('je confirme mon mot de passe {string}',(input)=>{

    createAccountPage.addVerifypassword(input);

})

When ('je coche le checkbox de confirmation',()=>{

    createAccountPage.clickIntoCheckButton();

})

When ('je clique sur le bouton singup',()=>{

    createAccountPage.clickIntoSingupButton();

})
