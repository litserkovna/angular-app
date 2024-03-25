describe('Update Item API Test', () => {
    it('should be updating an item', () => {

      const requestBody = {
        id: 1,
        title: 'Updated Title',
        body: 'Updated Body',
        userId: 4
    };

      cy.api({
        url: `${Cypress.env('API_URL')}/posts/1`,
        method: 'PUT',
        body: JSON.stringify(requestBody),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      }).as('updatePost');
  
      cy.get('@updatePost').its('status').should('eq', 200);
      cy.get('@updatePost').its('body.body').should('equals', requestBody.body);
      cy.get('@updatePost').its('body.title').should('equals', requestBody.title)
      cy.get('@updatePost').its('body.userId').should('eq', requestBody.userId);
    });
  });
  