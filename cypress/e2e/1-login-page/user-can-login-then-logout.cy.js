/// <reference types="cypress" />

describe('Working with login', () => {
    it('User should login to system with valid email and password', () => {
      cy.visit('http://127.0.0.1:8000/')
      //   cy.get('h4').should('have.text',"Login")
      //   cy.get('[data-id="email').type("superadmin@gmail.com")
      //   cy.get('[data-id="password').type("password")
      //   cy.get('[data-id="submit').click()
      //   cy.url().should('include',"dashboard")
      //   cy.get('[data-id="username').click()
      //   cy.get('[data-id="logout-btn').click()
      
      /* ==== Generated with Cypress Studio ==== */
      cy.get(':nth-child(2) > .form-control').clear('superadmin@gmail.com');
      cy.get(':nth-child(2) > .form-control').type('superadmin@gmail.com');
      cy.get(':nth-child(3) > .form-control').clear('p');
      cy.get(':nth-child(3) > .form-control').type('password');
      cy.get('.btn').click();
      cy.get('.nav-link > .d-sm-none').click();
      cy.get('.text-danger > .fas').click();
      /* ==== End Cypress Studio ==== */
    })
  })