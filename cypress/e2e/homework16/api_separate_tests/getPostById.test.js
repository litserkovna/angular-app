describe('Fetch Single Item API Test', () => {
    it('should be fetching a single item', async () => {
      const response = await cy.api({ 
        url: `${Cypress.env('API_URL')}/posts/1`
      });
      
      expect(response.status).to.equal(200);
      expect(response.body.userId).to.equal(1);
      expect(typeof response.body.id).to.equal('number');
      expect(typeof response.body.body).to.equal('string');
    });
  });
  