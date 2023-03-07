///<reference types = "Cypress"/>
describe('The test for Travel site, car button', () => {

    const car_tab = '[data-cy="Car"]';
    const origin_placeholder = '[placeholder="Destination, hotel name"][name=location]';
    const destination_placeholder = '[name=location]';
    const drop_off = ':nth-child(4) > :nth-child(1) > .input-group > .input--style-1';
    const car_group_list = '[name="car-group"]';
    const driver_age = '[name="driver-age"]';
    
    
    before(()=>{
        cy.visit('http://localhost:3000')
            cy.url().should('eq', 'http://localhost:3000/')
      })    
    
    beforeEach(()=>{
      cy.get(car_tab).click()
    }) 

    it('verify car tab', () => {
        cy.get(origin_placeholder).should("be.visible");
        // cy.get(flights_tab).invoke("attr", "aria-expanded").should("eq", "true");
        cy.get(car_tab).invoke("text").should("eq", "car");
      })

      it('populates location', () => {
        cy.get(destination_placeholder).type("London").invoke("val").should("eq", "London")
      })

      it('populates drop_off dates', () => {
        cy.get(drop_off).clear()
        cy.get(drop_off).type('10/10/2025').invoke('val').should('eq', '10/10/2025')
      })

      it('chooses list of cars', () => {
        cy.get(car_group_list).should("be.visible")

        cy.get(car_group_list).select('Group 1', {force: true}).should('have.value', 'Group 1')
        cy.get('[title="Group 1"]').should('be.visible')
        cy.get(car_group_list).select('Group 2', {force: true}).should('have.value', 'Group 2')
        cy.get('[title="Group 2"]').should('be.visible')
        cy.get(car_group_list).select('Group 3', {force: true}).should('have.value', 'Group 3')
        cy.get('[title="Group 3"]').should('be.visible')
      })

      it('chooses list of driver age', () => {
        cy.get(driver_age).should("be.visible")
        cy.get(driver_age).select('23', {force: true}).should('have.value', '23')
        cy.get(driver_age).select('24', {force: true}).should('have.value', '24')
        cy.get(driver_age).select('25', {force: true}).should('have.value', '25')
        cy.get(driver_age).select('26', {force: true}).should('have.value', '26')
      })


})    