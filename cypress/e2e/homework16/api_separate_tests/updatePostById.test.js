describe('Update Item API Test', () => {
    it('should be updating an item', () => {
      cy.api({
        url: `${Cypress.env('API_URL')}/posts/1`,
        method: 'PUT',
        body: JSON.stringify({
          id : 1,
          title: 'Updated Title',
          body: 'Updated Body',
          userId: 4
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      }).as('updatePost');
  
      cy.get('@updatePost').its('status').should('eq', 200);
      cy.get('@updatePost').its('body.body').should('equals', 'Updated Body');
      cy.get('@updatePost').its('body.title').should('equals', 'Updated Title')
      cy.get('@updatePost').its('body.userId').should('be.a','number').should('eq', 4);
    });
  });
  