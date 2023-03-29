/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />

import loginPage from "../support/Classes/loginClass";

// PAGE OBJECT MODEL EXAMPLE with imported Class 'loginPage' from support folder.
// Login USING doLogin() METHOD from imported Class 'loginPage'.
const pageLogin = new loginPage();

it('login username and password', () =>{

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    pageLogin.doLogin("Admin","admin123");
});
