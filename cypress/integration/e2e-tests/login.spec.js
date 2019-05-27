describe('Login Test', () => {
  before(function () {
    cy.visit('http://zero.webappsecurity.com/index.html')
    cy.url().should('include', 'index.html')
  })

  it('should display login form', function () {
    cy.get('#signin_button').click()
    //cy.contains('Signin').click()
    cy.get('#login_form').should('be.visible')
  })

  it('should login to application', function () {
    // cy.get('#user_login').type('Name')
    // cy.get('#user_password').type('Password')
    // cy.contains('Sign in').click()
    cy.LoginToApp("Name", "Password")
  })

  it('should display error message', function () {
    cy.get('.alert-error').as('Error_Message')
    cy.get('@Error_Message').should('be.visible')
  })

})