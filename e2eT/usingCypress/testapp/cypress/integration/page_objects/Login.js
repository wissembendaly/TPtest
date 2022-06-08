let Login = function () {

    this.usernameInput = 'input[name="login"]';
	this.passwordInput = 'input[name="password"]';
	this.submitButton = ".btn.btn-danger.btn-block.btn-round";
	this.navButton ="nav-link";	
	this.alertLoginError = ".nc-bell-55.nc-icon";




	this.verifyHomePage = async function(){

		cy.contains("Welcome To Watch Near").should('exists');

	}
	
	this.clickIntoLogin = async function(){

		cy.get(this.navButton).contains("Login").click();

	}


    this.login = async function (email, password) {

    cy.get(this.usernameInput).clear();
	cy.get(this.usernameInput).type(email).should('have.value', email);
    cy.get(this.passwordInput).clear();
    cy.get(this.passwordInput).type(password).should('have.value', password);
    cy.get(this.submitButton).first().click();
	
    };
	

	
    this.verifProfilePageDisplayed = async function() {
		
    cy.contains("profile").should('be.visible');
		
	};
	
	this.verifAlerteErrrorIsDisplayed = async function (messageError) {
		
    cy.get(this.alertLoginError).should('contain.text', messageError);
		
	}
	
	

};
module.exports = new Login();