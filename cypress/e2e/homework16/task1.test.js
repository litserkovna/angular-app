describe('Custom API Tests', () => {

  it('should be fetching a single item', async () => {
    const response = await cy.api({ 
      url: `${Cypress.env('API_URL')}/posts/1`});
    
    expect(response.status).to.equal(200);
    expect(response.body.userId).to.equal(1);
    expect(typeof response.body.id).to.equal('number');
    expect(typeof response.body.body).to.equal('string');
  });


  it('should be fetching all items', () =>{
      cy.api({ 
          url: `${Cypress.env('API_URL')}/posts`}).as('getFullList')

      cy.get('@getFullList').its('status').should('eq', 200)
      cy.get('@getFullList').its('body').should('have.length.above', 10) 
      cy.get('@getFullList').its('body').should('have.length', 100);
    })

  it('should be creating a new item', ()=>{
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
          }}).as('addPost')
      cy.get('@addPost').its('body.title').should('equals', 'My new title')
      cy.get('@addPost').its('body.body').should('equals', 'New Body')
      cy.get("@addPost").its('body.userId').should('be.a','number').should('eq', 3)
  })

  it('should be updating an item', ()=>{
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
          }}).as('updatePost')
      cy.get('@updatePost').its('status').should('eq', 200)
      cy.get('@updatePost').its('body.body').should('equals', 'Updated Body')
      cy.get('@updatePost').its('body.title').should('equals', 'Updated Title')
      cy.get('@updatePost').its('body.userId').should('be.a','number').should('eq', 4)
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
