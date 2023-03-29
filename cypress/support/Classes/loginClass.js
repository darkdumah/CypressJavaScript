export default class loginPage{

/**
 * 
 * @returns 
 */

getUsernameField(){

    return cy.get("input[placeholder='Username']");
}

/**
 * 
 * @returns 
 */

getPasswordField(){

    return cy.get("input[placeholder='Password']");

}

/**
 * 
 * @param {*} username 
 * @param {*} password 
 */

doLogin(username, password){

    this.getUsernameField().clear().type(username);
    this.getPasswordField().clear().type(password);

    cy.get('.oxd-button').click();

}




}