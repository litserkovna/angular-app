
export default class FormsPage {
  _url = "/pages/forms/layouts"
  _containerSelector = "nb-card.inline-form-card"


  navigate(){
    cy.visit(this._url)
  }


  fill({name, email, rememberMe = false}){
    this.nameInput.type(name)
    this.emailInput.type(email)

    if( rememberMe) this.rememberMeCheckbox.click()
  }

  get emailInput(){
    return cy.get(this._containerSelector).find('input[type="text"]').eq(1)
  }

  get nameInput(){
    return cy.get(this._containerSelector).find('input[type="text"]').first()
  }

  get rememberMeCheckbox(){
    return cy.get(this._containerSelector).find('span.custom-checkbox')
  }

  get submitButton(){
    return cy.get(this._containerSelector).find('button[type="submit"]')
  }
}
