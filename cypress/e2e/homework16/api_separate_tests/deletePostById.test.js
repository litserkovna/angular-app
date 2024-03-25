describe('Remove Item API Test', () => {
    it('should be removing an item', () => {
      cy.api({
        url: `${Cypress.env('API_URL')}/posts/1`,
        method: 'DELETE'
      }).as('removePost');
  
      cy.get('@removePost').its('status').should('eq', 200);
      cy.get('@removePost').its('body').should('deep.equal', {});
    });
  });