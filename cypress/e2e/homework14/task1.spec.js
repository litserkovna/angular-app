describe('Stepper Test', () => {
  beforeEach(() => {
    cy.visit("/pages/layout/stepper");
  });

  it('should verify Step content #1', () => {
    const firstContainer = 'nb-stepper[orientation="horizontal"]';
    cy.get(`${firstContainer} h3`).should("have.text", "Step content #1");
    cy.get(`${firstContainer} button`).contains("next").click();
    cy.get(`${firstContainer} h3`).should("have.text", "Step content #2");
    cy.get(`${firstContainer} button`).contains("next").click();
    cy.get(`${firstContainer} h3`).should("have.text", "Step content #3");
    cy.get(`${firstContainer} button`).contains("next").click();
    cy.get(`${firstContainer} h3`).should("have.text", "Step content #4");
  });
});