Feature: [test] as a user....


Scenario: [test] test1
Given url is open
Then the website is diplayed
When i click on the search bar
And I write "ROUGE ALLURE"
Then the element that contains "ROUGE ALLURE" is displayed
When Select the second element of the list
Then the product name is displayed as the one selected before

