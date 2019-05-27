describe('Feedback Test', () => {
  before(function () {
    cy.visit('http://zero.webappsecurity.com/index.html')
    cy.url().should('include', 'index.html')
  })

  it('should display feedback form', function () {
    cy.get('#feedback').as("Link_Feedback")

    cy.get('@Link_Feedback').click()
    cy.get('#feedback-title').should('be.visible')
    cy.get('form').should('be.visible')
  })

  it('should submit feedback form', function () {
    cy.get('#name').as('Input_Name')
    cy.get('#email').as('Input_Email')
    cy.get('#subject').as('Input_Subject')
    cy.get('#comment').as('Input_Comment')
    //cy.get('#.btn-signin').as('Submit_Button')

    cy.get('@Input_Name').type('Just Name')
    cy.get('@Input_Email').type('Just email')
    cy.get('@Input_Subject').type('Just subject')
    cy.get('@Input_Comment').type('Just comment')
    //cy.type('@Submit_Button').click()
    cy.contains('Send Message').click()
  })

  it('should display success message', function () {
    cy.get('#feedback-title').should('be.visible')
  })
})