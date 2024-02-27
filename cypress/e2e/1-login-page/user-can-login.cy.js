describe('User can login to system', () => {
  //postive test case
  it('User can login with valid username and password', () => {
    //arrange
    cy.visit('http://127.0.0.1:8000/')
    //act
    cy.get(':nth-child(2) > .form-control').type("superadmin@gmail.com")
    cy.get(':nth-child(3) > .form-control').type("password")
    cy.get('.btn').click()
    //assert
    cy.get('.nav-link > .d-sm-none').should('have.text',"Hi, SuperAdmin")
    cy.url().should('include',"dashboard")
  })

  //Negative test case
  it('User cant login with valid username but invalid password', () => {
    cy.visit('http://127.0.0.1:8000/')
    cy.get(':nth-child(2) > .form-control').type("superadmin@gmail.com")
    cy.get(':nth-child(3) > .form-control').type("password-salah")
    cy.get('.btn').click()
    cy.get('.invalid-feedback').should('have.text',"These credentials do not match our records.")
  });

  //Negative test case
  it('User cant login with invalid username but valid password', () => {
    cy.visit('http://127.0.0.1:8000/')
    cy.get(':nth-child(2) > .form-control').type("superadminhahayy@gmail.com")
    cy.get(':nth-child(3) > .form-control').type("password")
    cy.get('.btn').click()
    cy.get('.invalid-feedback').should('have.text',"These credentials do not match our records.")
  });

  //Negative test case
  it('User cant login with empty username and valid password', () => {
    cy.visit('http://127.0.0.1:8000/')
    //cy.get(':nth-child(2) > .form-control').type("")
    cy.get(':nth-child(3) > .form-control').type("password")
    cy.get('.btn').click()
    cy.get('.invalid-feedback').should('have.text',"The email field is required.")
  });

  
  //Negative test case
  it('User cant login with valid username and empty password', () => {
    cy.visit('http://127.0.0.1:8000/')
    cy.get(':nth-child(2) > .form-control').type("superadmin@gmail.com")
    //cy.get(':nth-child(3) > .form-control').type("password-salah")
    cy.get('.btn').click()
    cy.get('.invalid-feedback').should('have.text',"The password field is required.")
  });
  
    //Negative test case
  it('User cant login with empty username and password', () => {
    cy.visit('http://127.0.0.1:8000/')
    //cy.get(':nth-child(2) > .form-control').type("superadmin@gmail.com")
    //cy.get(':nth-child(3) > .form-control').type("password-salah")
    cy.get('.btn').click()
    cy.get(':nth-child(2) > .invalid-feedback').should('have.text',"The email field is required.")
    cy.get(':nth-child(3) > .invalid-feedback').should('have.text',"The password field is required.")
  });
})