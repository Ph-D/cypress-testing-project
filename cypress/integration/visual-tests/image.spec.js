describe('My first visual regression test', () => {
  before(function () {
    cy.visit('https://example.com')
  })

  it('should load homepage', function () {
    cy.url().should('include', 'example.com')
  })

  it('should make snapshot', function () {
    cy.matchImageSnapshot()
  })
})