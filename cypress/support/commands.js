// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
const { addMatchImageSnapshotCommand } = require('cypress-image-snapshot/command')
addMatchImageSnapshotCommand()

Cypress.Commands.add('submitDeveloper', name => {
  cy.get("#developer-name").type(name)
  cy.get('#submit-button').scrollIntoView()
  cy.get('#submit-button').click()
})

Cypress.Commands.add('LoginToApp', (name, password) => {
  cy.get('#user_login').type(name)
  cy.get('#user_password').type(password)
  cy.contains('Sign in').click()
})
