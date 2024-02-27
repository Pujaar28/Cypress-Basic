/// <reference types="cypress" />

describe('Working with login', () => {
  it('User should can open login page', () => {
    cy.visit('http://127.0.0.1:8000/')
    cy.get('h4').should('have.text',"Login")
    cy.get('[data-id="email').type("superadmin@gmail.com")
  })
})