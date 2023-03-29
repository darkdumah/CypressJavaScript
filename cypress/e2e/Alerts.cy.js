/// <reference types="Cypress" />

/// <reference types="cypress-xpath" />


describe('Alerts', ()=>{

// JavaScript alert
it('JS Alert', ()=>{

    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.get("button[onclick='jsAlert()']").click();

    cy.on('window:alert', (t)=>{

        expect(t).to.contain('I am a JS Alert');

    })

    // alert window automatically closed by cypress

    cy.get("#result").should('have.text','You successfully clicked an alert');

})







})