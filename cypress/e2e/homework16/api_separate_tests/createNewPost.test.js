describe('Create New Item API Test', () => {
    it('should be creating a new item', () => {

      const requestBody = {
        title: 'My new title',
        body: 'New Body',
        userId: 3 
      };

      cy.api({
        url: `${Cypress.env('API_URL')}/posts`,
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      }).as('addPost');
  
      cy.get('@addPost').its('body.title').should('equals', requestBody.title);
      cy.get('@addPost').its('body.body').should('equals', requestBody.body);
      cy.get('@addPost').its('body.userId').should('equals', requestBody.userId);
    });
  });
  