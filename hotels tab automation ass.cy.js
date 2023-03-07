///<reference types = "Cypress"/>
describe('The sanity test suite for Travel site', () => {
    
  before(()=>{
    cy.visit('http://localhost:3000')
        cy.url().should('eq', 'http://localhost:3000/')
  })  
  
  

     //Address/Going to box
    it('verify Address/Going to box', () => {
        cy.visit('http://localhost:3000')
        cy.get('#tab1 > form > :nth-child(1)').should("be.visible")
        cy.get('#tab1 > form > :nth-child(1) > .label').should("be.visible")
        cy.get('#tab1 > form > :nth-child(1) > .input--style-1').should("be.visible")
        cy.get('#tab1 > form > :nth-child(1) > .zmdi').should("be.visible")
        cy.get('#tab1 > form > :nth-child(1) > .label').should("have.text","Going to")
        
      })
    
      //Check-in box
      it('verify Check-in box', () => {
        cy.visit('http://localhost:3000')
        cy.get('#tab1 > form > .row > :nth-child(1) > .input-group').should("be.visible")
        cy.get('#tab1 > form > .row > :nth-child(1) > .input-group > .label').should("be.visible")
        cy.get('#tab1 > form > .row > :nth-child(1) > .input-group > .zmdi').should("be.visible")
        cy.get('#input-start').should("be.visible")
        cy.get('#tab1 > form > .row > :nth-child(1) > .input-group > .label').should("have.text","check-in")
      })
      
      //Check-out box
      it('verify Check-out box', () => {
        cy.visit('http://localhost:3000')
        cy.get('#tab1 > form > .row > :nth-child(2) > .input-group').should("be.visible")
        cy.get('#tab1 > form > .row > :nth-child(2) > .input-group > .zmdi').should("be.visible")
        cy.get('#tab1 > form > .row > :nth-child(2) > .input-group > .label').should("be.visible")
        cy.get('#input-end').should("be.visible")
        cy.get('#tab1 > form > .row > :nth-child(2) > .input-group > .label').should("have.text","check-out")
      })

      //Travelers list
      it('verify Travelers list', () => {
        cy.visit('http://localhost:3000')
        cy.get('#tab1 > form > :nth-child(3)').should("be.visible")
        cy.get('.zmdi-account-add').should("be.visible")
        cy.get(':nth-child(3) > .label').should("be.visible")
        cy.get('#info').should("be.visible")
        cy.get('#js-select-special > .zmdi').should("be.visible")
        cy.get(':nth-child(3) > .label').should("have.text","travellers")
      })

      //Add a Flight checkbox
      it('verify Add a Flight checkbox', () => {
        cy.visit('http://localhost:3000')
        cy.get('.checkbox-row > .m-r-45').should("be.visible")
        cy.get('[data-cy="flight_chk"]').should("be.visible")
       
      })

      //Add a Car checkbox
      it('verify Add a Car checkbox', () => {
        cy.visit('http://localhost:3000')
        cy.get('.checkbox-row > :nth-child(2)').should("be.visible")
        cy.get('[data-cy="cars_chk"]').should("be.visible")
        
      })

      //Search Button
      it('verify Search Button', () => {
        cy.visit('http://localhost:3000')
        cy.get('#tab1 > form > .btn-submit').should("be.visible")
        cy.get('#tab1').should("be.visible")
        
      })
      
    })
