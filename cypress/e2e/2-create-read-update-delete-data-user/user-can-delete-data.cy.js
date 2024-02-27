/// <reference types="cypress" />

describe('Working with delete data ', () => {
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

    //postivie test case
    it('User can delete data', () => {
        cy.get('.table td').contains('user').parent().contains('Delete').click()
        cy.get('.swal-button-container').find('button').contains('OK').click()
    
        //example for selecting delete
    //   cy.get('.table td').contains('user').nextAll().contains('Delete').click()
    //   cy.get('.table td').contains('user').next().next().next().next().contains('Delete').click()

      cy.get('.alert')
      .should('be.visible')
      .and("have.class","alert-success")
      .contains('User Deleted Successfully')

      cy.get('.table td').should('not.contain','user')
    })

    //Positive test case
    it('User can cancel delete data', () => {
      cy.get('.table td').contains('user').parent().contains('Delete').click()
      cy.get('.swal-button-container').find('button').contains('Cancel').click()
      cy.get('.table td').contains('user')
      
    })
});