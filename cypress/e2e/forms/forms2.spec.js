import FormsPage from "../../pageObjects/FormsPage";

describe("Forms", ()=>{
  beforeEach(()=>{
    cy.visit("/pages/forms/layouts")
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

describe.only("Forms",{ }, ()=>{
  beforeEach(()=>{
    cy.visit("/pages/forms/layouts")
  })

  it("should fill form (with custom commands)", ()=>{
    const userData = {
      name: "John Doe",
      email: "test@test.com",
      rememberMe: true
    }

    cy.fillForm(userData)
    cy.get("nb-card.inline-form-card").find('button[type="submit"]').as("submitButton")

    cy.get("@submitButton").click()

    // cy.getById('nameInput').type("")
  })
})


describe("Forms", ()=>{
  const formsPage = new FormsPage()

  beforeEach(()=>{
    formsPage.navigate()
  })

  it("should fill form (with POM)", ()=>{
    const userData = {
      name: "John Doe",
      email: "test@test.com"
    }

    formsPage.nameInput.type(userData.name)
    formsPage.nameInput.invoke("val").should("eq", userData.name)

    formsPage.emailInput.type(userData.email)
    formsPage.emailInput.invoke("val").should("eq", userData.email)

    formsPage.rememberMeCheckbox.click()

    formsPage.submitButton.should("be.visible").and("be.enabled")

    formsPage.submitButton.click()
  })

  it("should fill form (with POM and fill method)", ()=>{
    const userData = {
      name: "John Doe",
      email: "test@test.com",
      rememberMe: true
    }

    formsPage.fill(userData)
    formsPage.submitButton.click()
  })
})

