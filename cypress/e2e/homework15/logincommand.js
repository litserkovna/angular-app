Cypress.Commands.add('login', (email, password) => {
    cy.visit('auth/login');
    cy.get('#input-email').type(email);
    cy.get('#input-password').type(password);
    cy.get('.custom-checkbox').click();
    cy.get('button[status="primary"]').should('be.visible').click().wait(2000);
    cy.url().should('include', '/pages/dashboard'); 
});