
describe("Forms", ()=>{
  beforeEach(()=>{
    cy.visit("/pages/forms/layouts")
    // cy.get("nb-card.inline-form-card").as("container")
  })

  it("should fill form 1", ()=>{
    const containerSelector = "nb-card.inline-form-card"

    cy.get(`${containerSelector} input[type="text"]`).first().type("John Doe")
    cy.get(`${containerSelector} input[type="text"]`).eq(1).type("test@test.com")

    cy.get(`${containerSelector} span.custom-checkbox`).click()

    cy.get(`${containerSelector} button[type="submit"]`).click()
  })

  it("should fill form (with find)", ()=>{
    const containerSelector = "nb-card.inline-form-card"

    cy.get(containerSelector).find('input[type="text"]').first().type("John Doe")
    cy.get(containerSelector).find('input[type="text"]').eq(1).type("test@test.com")

    cy.get(containerSelector).find('span.custom-checkbox').click()

    cy.get(containerSelector).find('button[type="submit"]').click()
  })

  it("should fill form (with within)", ()=>{
    cy.get("nb-card.inline-form-card").within(()=>{

      cy.get('input[type="text"]').first().type("John Doe")
      cy.get('input[type="text"]').eq(1).type("test@test.com")

      cy.get('span.custom-checkbox').click()
      cy.get('button[type="submit"]').click()
    })
  })


  it("should fill form (with aliases)", ()=>{
    const userData = {
      name: "John Doe",
      email: "test@test.com"
    }

    cy.get("nb-card.inline-form-card").as("container")

    cy.get("@container").find('input[type="text"]').first().as("nameInput")
    cy.get("@container").find('input[type="text"]').eq(1).as("emailInput")
    cy.get("@container").find('span.custom-checkbox').as("rememberMeCheckbox")
    cy.get("@container").find('button[type="submit"]').as("submitButton")

    cy.get("@nameInput").type(userData.name)
    cy.get("@nameInput").invoke("val").should("eq", userData.name)

    cy.get("@emailInput").type(userData.email)
    cy.get("@emailInput").invoke("val").should("eq", userData.email)

    cy.get("@rememberMeCheckbox").click()

    cy.get("@submitButton").should("be.visible").and("be.enabled")

    cy.get("@submitButton").click()
  })
})

describe.only("Type", ()=>{
  it("should type into form", ()=>{
    cy.visit("/pages/forms/inputs")

    cy.get("nb-card").find('input.status-info').should("be.visible").and("be.enabled")

    cy.get("nb-card").find('input.status-info').type("Hello World!!!", {delay: 100})
    cy.get("nb-card").find('input.status-info').type("Hello World!!!{alt}+{enter}", {delay: 100})

    const fruits = ["apple", "banana"]

    cy.wrap(fruits).should("have.length", 2)
  })
})

