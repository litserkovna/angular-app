describe('Dialog Test', () => {
    beforeEach(() => {
        cy.visit("/pages/modal-overlays/dialog");
    });

    it('Should click on the button', () => {
        cy.get('nb-card-body.result-from-dialog button').contains("Enter Name").click();
        cy.get('ngx-dialog-name-prompt.ng-star-inserted').should('exist');cy.get('ngx-dialog-name-prompt nb-card-header').should('contain.text', 'Enter your name');
        cy.get('ngx-dialog-name-prompt nb-card-body input').should('be.visible').and('be.enabled');
        cy.get('ngx-dialog-name-prompt nb-card-footer button').contains("Submit").should('be.visible').and('be.enabled');
        cy.get('ngx-dialog-name-prompt nb-card-footer button').contains("Cancel").should('be.visible').and('be.enabled');
    });
    });
