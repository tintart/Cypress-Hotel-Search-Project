///<reference types = "Cypress"/>
describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    cy.url().should('eq', 'https://example.cypress.io/')
  })
})