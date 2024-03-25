describe('Fetch All Items API Test', () => {
    it('should be fetching all items', () => {
      cy.api({ 
        url: `${Cypress.env('API_URL')}/posts`
      }).as('getFullList');
  
      cy.get('@getFullList').its('status').should('eq', 200)
      cy.get('@getFullList').its('body').should('have.length.above', 10) 
      cy.get('@getFullList').its('body').should('have.length', 100);
  
      });
    });

  