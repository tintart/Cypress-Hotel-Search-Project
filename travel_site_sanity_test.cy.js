///<reference types = "Cypress"/>
describe('The sanity test suite for Travel site', () => {

const hotels = '[data-cy="Hotels"]';
const car = '[data-cy="Car"]';
const flight = '[data-cy="Flight"]';

  before(()=>{
    cy.visit('http://localhost:3000')
        cy.url().should('eq', 'http://localhost:3000/')
  })   

    // it('navigate to the main page', () => {
    //   cy.visit('http://localhost:3000')
    //   cy.url().should('eq', 'http://localhost:3000/')
    // })

    it('verify page_s tabs', () => {
      
        cy.get(hotels).should("be.visible")
        cy.get(car).should("be.visible")
        cy.get(flight).should("be.visible")
      })

      it('verify text page_s tabs', () => {
     
        cy.get(hotels).should("have.text", "hotels")
        cy.get(car).should("have.text", "car")
        cy.get(flight).should("have.text", "flight")
      })

      it('verify page_s elements', () => {
  
        cy.get('.checkbox-row > .m-r-45').should("be.visible")
        cy.get('.checkbox-row > :nth-child(2)').should("be.visible")
        //cy.get('#tab1 > form > .btn-submit').should("be.visible")
        //cy.contains("search").should("be.visible")
        cy.get('[type = "submit"]').should("be.visible")

      })
  })