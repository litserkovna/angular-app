export default class SmartTablePage {
    _url = "/pages/tables/smart-table";

    openPage() {
        cy.visit(this._url);
    }

    get addUserButton() {
        return cy.get('i.nb-plus');
    }

    get userIdField() {
        return cy.get('input.form-control[placeholder="ID"][ng-reflect-name="id"][ng-reflect-is-disabled="false"]');
    }

    get firstNameField() {
        return cy.get('input.form-control[placeholder="First Name"][ng-reflect-name="firstName"][ng-reflect-is-disabled="false"]');
    }

    get lastNameField() {
        return cy.get('input.form-control[placeholder="Last Name"][ng-reflect-name="lastName"][ng-reflect-is-disabled="false"]');
    }

    get usernameField() {
        return cy.get('input.form-control[placeholder="Username"][ng-reflect-name="username"][ng-reflect-is-disabled="false"]');
    }

    get emailField() {
        return cy.get('input.form-control[placeholder="E-mail"][ng-reflect-name="email"][ng-reflect-is-disabled="false"]');
    }

    get ageField() {
        return cy.get('input.form-control[placeholder="Age"][ng-reflect-name="age"][ng-reflect-is-disabled="false"]');
    }

    get saveButton() {
        return cy.get('a.ng2-smart-action.ng2-smart-action-add-create');
    }

    get verifyId() {
        return cy.get('div[class="ng-star-inserted"]').eq(0);
    }

    get verifyFirstName() {
        return cy.get('div[class="ng-star-inserted"]').eq(1);
    }

    get verifyLastName() {
        return cy.get('div[class="ng-star-inserted"]').eq(2);
    }

    get verifyUsername() {
        return cy.get('div[class="ng-star-inserted"]').eq(3);
    }

    get verifyEmail() {
        return cy.get('div[class="ng-star-inserted"]').eq(4);
    }

    get verifyAge() {
        return cy.get('div[class="ng-star-inserted"]').eq(5);
    }

    get saveUpdated() {
        return cy.get('i.nb-checkmark').eq(0);
    }

    get updateButton() {
        return cy.get('i.nb-edit').eq(0);
    }
}