
describe('Json placehloder', {
  env : {
    API_URL: "https://jsonplaceholder.typicode.com/"
  }
} ,()=>{

  // it('should make request', () => {
  //   cy.request(Cypress.env("api_url") + "/todos/1").then((v)=>{
  //     cy.log(JSON.stringify(v.body))
  //     console.log(v.body)
  //   })
  // });


  it('should return todo item by id', () => {
    cy.api({
      url: `${Cypress.env("API_URL")}/todos/1`
    }).as("getTodo")

    cy.get("@getTodo").its("status").should('eq', 200)
    cy.get("@getTodo").its("body.id").should('eq', 1)
  });

  it("should create post", ()=>{
    const requestBody = {
          title: 'foo',
          body: 'bar',
          userId: 1,
        }

    cy.api({
      method: 'POST',
      url: `${Cypress.env("API_URL")}/posts`,
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body:requestBody
    }).as("createPost")

    cy.get("@createPost").its('status').should('eq', 201)
    cy.get("@createPost").its('body').should('contain', requestBody)
  })
})
