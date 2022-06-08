require('cypress-xpath');
import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";

let testObjects = require('../page_objects/test');


Given ('url is open',()=>{

    testObjects.visitWebSite();

})

Then ('the website is diplayed',()=>{

    testObjects.verifyPage();

})

When ('i click on the search bar',()=>{


    testObjects.clickIntoSearchIcon();

})

When ('I write {string}',(searchInput)=>{

    testObjects.addSearchInput(searchInput);

})


Then ('the element that contains {string} is displayed',(search)=>{

    testObjects.verifySearchResult(search);

})

When ('Select the second element of the list',()=>{

    testObjects.selectSecondElement();

})

Then ('the product name is displayed as the one selected before',()=>{


})
