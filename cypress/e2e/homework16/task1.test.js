describe('Custom API Tests', () => {

  it('should be fetching a single item', async () => {
    const response = await cy.api({ 
      url: `${Cypress.env('API_URL')}/posts/1`});
    
    expect(response.status).to.equal(200);
    expect(response.body.userId).to.equal(1);
    expect(typeof response.body.body).to.equal('string');
  });


  it('should be fetching all items', () =>{
      cy.api({ 
          url: `${Cypress.env('API_URL')}/posts`}).as('getFullList')

      cy.get('@getFullList').its('status').should('eq', 200)
      cy.get('@getFullList').its('body').should('have.length.above', 10) 
    })

  it('should be creating a new item', ()=>{
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

  it('should be updating an item', ()=>{

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
          }}).as('updatePost')
      cy.get('@updatePost').its('status').should('eq', 200)
      cy.get('@updatePost').its('body.body').should('equals', requestBody.body)
      cy.get('@updatePost').its('body.title').should('equals', requestBody.title)
      cy.get('@updatePost').its('body.userId').should('eq', requestBody.userId)
  })

  it('should be removing an item', ()=>{
      cy.api({
          url: `${Cypress.env('API_URL')}/posts/1`,
              method: 'DELETE'
             }).as('removePost')
      cy.get('@removePost').its('status').should('eq', 200)
      cy.get('@removePost').its('body').should('deep.equal', {});
  })

})
