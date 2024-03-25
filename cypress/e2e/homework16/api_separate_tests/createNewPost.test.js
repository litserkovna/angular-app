describe('Create New Item API Test', () => {
    it('should be creating a new item', () => {
      cy.api({
        url: `${Cypress.env('API_URL')}/posts`,
        method: 'POST',
        body: JSON.stringify({
          title: 'My new title',
          body: 'New Body',
          userId: 3 
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      }).as('addPost');
  
      cy.get('@addPost').its('body.title').should('equals', 'My new title');
      cy.get('@addPost').its('body.body').should('equals', 'New Body');
      cy.get('@addPost').its('body.userId').should('be.a','number').should('eq', 3);
    });
  });
  