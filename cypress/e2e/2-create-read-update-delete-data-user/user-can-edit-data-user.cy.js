/// <reference types="cypress" />
describe('Working with edit data ', () => {
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
      });

//Positive Test Case
it('User can edit data', () => {
    cy.get('.table td').contains('user').parent().find('a').contains('Edit').click()
    cy.get('#name').clear('user ');
    cy.get('#name').type('user edited');
    cy.get('.btn-primary').contains('Submit').click();
    cy.get('.table td').contains('user').should('have.text', 'user edited');
   cy.get('.alert')
      .should('be.visible')
      .and("have.class","alert-success")
      .contains('User Berhasil Diupdate')
});

it('User can cancel edit data', () => {
    cy.get('.table td').contains('user').parent().find('a').contains('Edit').click()
    cy.get('.btn-secondary').contains('Cancel').click();
    cy.get('.table td').contains('user')
});

//Negative Test Case
it('User cannot edit data with blank username', () => {
    cy.get('.table td').contains('user').parent().find('a').contains('Edit').click()
    cy.get('#name').clear();
    cy.get('.btn-primary').contains('Submit').click();
    cy.get('.invalid-feedback').should('contain','The name field is required.');
    cy.get('.invalid-feedback').should('have.class', 'invalid-feedback');
    cy.get('.invalid-feedback').should('be.visible');

});

it('User cannot edit data with blank email', () => {
    cy.get('.table td').contains('user').parent().find('a').contains('Edit').click()
    cy.get('#email').clear();
    cy.get('.btn-primary').contains('Submit').click();
    cy.get('.invalid-feedback').should('contain','The email field is required.');
    cy.get('.invalid-feedback').should('have.class', 'invalid-feedback');
    cy.get('.invalid-feedback').should('be.visible');  
});

it('User cannot edit data with all blank field', () => {
    cy.get('.table td').contains('user').parent().find('a').contains('Edit').click()
    cy.get('#name').clear();
    cy.get('#email').clear();
    cy.get('.btn-primary').contains('Submit').click();
    cy.get('#name')
      .next()
      .should('be.visible')
      .and('have.class','invalid-feedback')
      .and('contain','The name field is required.');
      cy.get('#email')
      .next()
      .should('be.visible')
      .and('have.class','invalid-feedback')
      .and('contain','The email field is required.');
  
});
})