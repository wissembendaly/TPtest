let Login = function () {

    this.firstnameInput = 'input[name="firstname"]';
	this.lastnameInput = 'input[name="lastname"]';
	this.emailInput = 'input[name="email"]';
    this.usernameInput = 'input[name="username"]';
    this.passwordInput = 'input[name="password"]';
	this.verifypasswordInput = 'input[name="repeatedPassword"]';
    this.checkButton = ".checkbox-circle.mr-2";
    this.singupButton = ".btn.btn-danger.btn-block.btn-round";


    this.clickIntoRegister = async function(){

        cy.contain("Register").click({force:true});

    }

    this.addFirstname = async function(input){

        cy.get(this.firstnameInput).clear().type(input);

    }


	this.addLastname = async function(input){

        cy.get(this.lastnameInput).clear();
        cy.get(this.lastnameInput).type(input).should('have.value',input);
        

    }


	this.addEmail = async function(input){

        cy.get(this.emailInput).clear();
        cy.get(this.emailInput).type(input).should('have.value',input);
        

    }


    this.addUsername = async function(input){

        cy.get(this.usernameInput).clear();
        cy.get(this.usernameInput).type(input).should('have.value',input);

    }
    
    
    this.addPassword = async function(){

        cy.get(this.passwordInput).clear();
        cy.get(this.passwordInput).type(input).should('have.value',input);

    }


	this.addVerifypassword = async function(){

        cy.get(this.verifypasswordInput).clear();
        cy.get(this.verifypasswordInput).type(input).should('have.value',input);

    }


    this.clickIntoCheckButton = async function(){

        cy.get(this.checkButton).click();

    }

    
    this.clickIntoSingupButton = async function(){

        cy.get(this.singupButton).click();

    }



	
	

};
module.exports = new Login();