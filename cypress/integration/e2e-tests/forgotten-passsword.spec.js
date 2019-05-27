describe('Forgotten Password', () => {
  before(function () {
    cy.visit('http://zero.webappsecurity.com/index.html')
    cy.url().should('include', 'index.html')
  })

  it('should display login form', function () {
    cy.get('#signin_button').click()
    cy.get('#login_form').should('be.visible')
  })

  it('should display forgotten password form', function () {
    cy.contains('Forgot your password ?').click()
    cy.get('#send_password_form').should('be.visible')
    cy.url().should('include', 'forgot-password.html')
  })

  it('should submit forgotten password form', function () {
    cy.get('#user_email').type('phildoreau@gmail.com')
    cy.contains('Send Password').click()
  })

  it('should display succes message', function () {
    cy.get('h3').contains('Forgotten Password')
    cy.url().should('include', 'forgotten-password-send.html')
  })
})
