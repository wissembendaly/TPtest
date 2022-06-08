let test = function(){
this.ele1 ="";
this.searchIcon = '//button[@title="Search"]'; //".button.nav-item.is-hidden-s-only.js-search-button"
this.searchInput = "#searchInput";
this.title='#hp-corpo_22k_4 > .sliding-hero__link > [data-test=secSildingHeroLast] > .sliding-hero__col > .context > .heading > span';
this.searchList = ".product-list-inline";

this.visitWebSite= async function(){

    cy.visit("https://medium.com/nerd-for-tech/cypress-page-object-model-953791736972");

}

this.verifyPage= async function(){

    cy.wait(3000);
    cy.get(this.title).should('include.text'," Fall-Winter 2022/23");

}

this.clickIntoSearchIcon = async function(){

    cy.get(this.searchIcon).click();

}

this.addSearchInput= async function(searchInput){

    cy.get(this.searchInput).clear().type(searchInput);

}


this.verifySearchResult = async function(result){

    cy.get(this.searchList).each(($li, index, $lis) => {

        $li.wrap().expect.to.include.text(result);

    });

}

this.selectSecondElement = async function(){

const listelement= cy.get(this.searchList);
const secondElement = listelement[1].click();

}


}

module.exports = new test();