/// <reference types="cypress" />

describe('Youtube Automation',()=>{

    it('Navigate to youtube, search and validate the title',()=>{
        cy.visit("https://www.youtube.com")
        cy.title().should('eq', 'YouTube')
        cy.get('#search').type('The whole working-from-home thing — Apple')
        cy.wait(3000)
        cy.get('#search-icon-legacy').click()
        cy.title().should('eq','The whole working-from-home thing — Apple - YouTube')
    })
})