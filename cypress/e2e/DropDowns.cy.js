/// <reference types="Cypress" />

/// <reference types="cypress-xpath" />

describe('handle dropdowns', ()=>{

it.skip('Dropdown with select', ()=>{


    cy.visit("https://www.zoho.com/commerce/free-demo.html");
    
    // select dropdown element
    cy.get('#zcf_address_country').should('exist');

    // select dropdown value
    cy.get('#zcf_address_country')
    .select('Germany')
    .should('have.value','Germany');

    cy.xpath("//option").should('have.length', 249);

})

it.skip('Dropdown without select',()=>{

    cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/");
    cy.get("#select2-billing_country-container").click();
    cy.get("input[role='combobox']").type('Germany').type('{enter}');
    cy.get("#select2-billing_country-container").should('have.text', 'Germany');
})

it.skip('Auto suggest dropdown',()=>{

    cy.visit("https://www.wikipedia.org/");
    cy.get("#searchInput").type('Baia Mare');
    cy.get(".suggestion-description").contains('Place in').click();

})

it('Dynamic dropdown',()=>{

    cy.visit("https://www.google.ro/");
    cy.get("input[name='q']").type('cypress automation');
    cy.wait(3000);
    cy.get("div.wM6W7d>span").should('have.length', 12);
    
    cy.get("div.wM6W7d>span").each(($el, index, $list)=>{
        if($el.text() == 'cypress automation tutorial'){
            cy.wrap($el).click();

        }

    })

    cy.get("input[name='q']").should('have.value','cypress automation tutorial');

})

})