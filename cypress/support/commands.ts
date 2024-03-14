/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
declare global {
  namespace Cypress {
    interface Chainable {
      fillForm(data: {name: string, email: string, rememberMe: boolean }): Chainable<void>;
      getById(id: string): Chainable<Element>;
    }
  }
}

Cypress.Commands.add('fillForm', ({name, email, rememberMe = false}: {name: string, email: string, rememberMe: boolean }) => {
  cy.get('nb-card.inline-form-card input[type="text"]' ).first().type(name);
  cy.get('nb-card.inline-form-card input[type="text"]' ).eq(1).type(email);

  if (rememberMe) cy.get('nb-card.inline-form-card span.custom-checkbox').click();
});


Cypress.Commands.add('getById', function (id: string) {
  return cy.get(`#${id}`);
});
