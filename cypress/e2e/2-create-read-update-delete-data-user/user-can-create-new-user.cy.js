/// <reference types="cypress" />

describe('Working with Create New User', () => {
  beforeEach(()=>{
    cy.visit('http://127.0.0.1:8000/');
      //reset database by calling php artisan
      cy.exec('C:/xampp/php/php.exe C:/xampp/htdocs/demo-app-cypress-automation/artisan migrate:fresh --seed')
      .its('code')
      .should('eq', 0);
      //act
      cy.get(':nth-child(2) > .form-control').type('superadmin@gmail.com');
      cy.get(':nth-child(3) > .form-control').type('password');
      cy.get('.btn').click();
      cy.get('.navbar-nav > :nth-child(1) > .nav-link > .fas').click();
      cy.get(':nth-child(2) > .has-dropdown > span').click();
      cy.get('.active > .dropdown-menu > li > .nav-link').click();
      cy.get('.card-header-action > .btn-icon').click();
  })

//postivie test case
    it('User should create new user with valid data', () => {
      cy.get('#name').type('Puja Aditya Raihan');
      cy.get('#email').type('adit.raihan@gmail.com');                
      cy.get('#password').type('12345678');
      cy.get('.btn-primary').click();
      //assert
      cy.get('p').should('have.text', 'Data Berhasil Ditambahkan');
      cy.get('p').should('be.visible');
      cy.get('.navbar-right > :nth-child(2) > .nav-link').click();
      cy.get('.text-danger').click();
  
    })

    it('User cant create new user with empty data', () => {
      cy.get('.btn-primary').click();
      cy.get(':nth-child(2) > .invalid-feedback').should('have.text', '\n                                    The name field is required.\n                                ');
      cy.get(':nth-child(2) > .invalid-feedback').should('be.visible');
      cy.get(':nth-child(3) > .invalid-feedback').should('have.text', '\n                                    The email field is required.\n                                ');
      cy.get(':nth-child(3) > .invalid-feedback').should('be.visible');
      cy.get(':nth-child(4) > .invalid-feedback').should('have.text', '\n                                    The password field is required.\n                                ');
      cy.get(':nth-child(4) > .invalid-feedback').should('be.visible');
      cy.get('.navbar-right > :nth-child(2) > .nav-link').click();
      cy.get('.text-danger').click();
      
    })

    it('User cant create new user with empty name', () => {
      cy.get('#email').type('adit.raihan@gmail.com');                
      cy.get('#password').type('12345678');
      cy.get('.btn-primary').click();
      //assert
      cy.get(':nth-child(2) > .invalid-feedback').should('have.text', '\n                                    The name field is required.\n                                ');
      cy.get(':nth-child(2) > .invalid-feedback').should('be.visible');
      cy.get('.navbar-right > :nth-child(2) > .nav-link').click();
      cy.get('.text-danger').click();
  
    })
    it('User cant create new user with invalid email', () => {
      cy.get('#name').type('Puja Aditya Raihan');
      cy.get('#email').type('adit.raihan');                
      cy.get('#password').type('12345678');
      cy.get('.btn-primary').click();
      //assert
      cy.get(':nth-child(3) > .invalid-feedback').should('have.text', '\n                                    The email must be a valid email address.\n                                ');
      cy.get(':nth-child(3) > .invalid-feedback').should('be.visible');
      cy.get('.navbar-right > :nth-child(2) > .nav-link').click();
      cy.get('.text-danger').click();
    })

    it('User cant create new user with empty email', () => {
      cy.get('#name').type('Puja Aditya Raihan');             
      cy.get('#password').type('12345678');
      cy.get('.btn-primary').click();
      //assert
      cy.get(':nth-child(3) > .invalid-feedback').should('have.text', '\n                                    The email field is required.\n                                ');
      cy.get(':nth-child(3) > .invalid-feedback').should('be.visible');
      cy.get('.navbar-right > :nth-child(2) > .nav-link').click();
      cy.get('.text-danger').click();
    })

    it('User cant create new user with empty password', () => {
      cy.get('#name').type('Puja Aditya Raihan');       
      cy.get('#email').type('adit.raihan@gmail.com')
      cy.get('.btn-primary').click();
      //assert
      cy.get(':nth-child(4) > .invalid-feedback').should('have.text', '\n                                    The password field is required.\n                                ');
      cy.get(':nth-child(4) > .invalid-feedback').should('be.visible');
      cy.get('.navbar-right > :nth-child(2) > .nav-link').click();
      cy.get('.text-danger').click();
    })
  })