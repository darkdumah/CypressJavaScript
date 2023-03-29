/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

// EXAMPLES OF ASSERTIONS.
// IMPLICIT _SHOULD_ and _AND_

 it('Implicit assertions', () => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.url().should('include','orangehrmlive.com')
    .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    .and('contain','orangehrm');

    cy.title().should('include','Orange')
    .and('contain','HRM')
    .and('eq',"OrangeHRM");

    cy.get('.orangehrm-login-branding > img').should('be.visible')
    .and('exist');
    

     cy.xpath("//a").should('have.length','5')

 })

// EXAMPLE OF EXPLICIT ASSERTIONS
// _EXPECT_
it('Explicit assertions', () =>{

  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  cy.get("input[placeholder='Username']").type("Admin");
  cy.get("input[placeholder='Password']").type("admin123");
  cy.get("button[type='submit']").click();

  let expctedName="Paul Collings";

  cy.get(".oxd-userdropdown-name").then( (x)=>{

    let actName = x.text();
    
    expect(actName).to.equal(expctedName);
    expect(actName).to.not.equal(expctedName);
  })

})

