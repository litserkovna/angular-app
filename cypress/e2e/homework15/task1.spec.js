import SmartTablePage from "../homework15/SmartTablePage";

describe('Table Test', () => {
    const smartTablePage = new SmartTablePage();

    beforeEach(() => {
        smartTablePage.openPage();
    });

    it('Should create a user and check the entered data', () => {
        const userData = {
            id: "1",
            firstName: "Kim",
            lastName: "Goodman",
            username: "kimgo",
            email: "kim@gmail.com",
            age: "25"
        };

        smartTablePage.addUserButton.click();
        smartTablePage.userIdField.type(userData.id);
        smartTablePage.firstNameField.type(userData.firstName);
        smartTablePage.lastNameField.type(userData.lastName);
        smartTablePage.usernameField.type(userData.username);
        smartTablePage.emailField.type(userData.email);
        smartTablePage.ageField.type(userData.age).wait(1000);
        smartTablePage.saveButton.click();

        smartTablePage.verifyId.should('contain.text', userData.id);
        smartTablePage.verifyFirstName.should('contain.text', userData.firstName);
        smartTablePage.verifyLastName.should('contain.text', userData.lastName);
        smartTablePage.verifyUsername.should('contain.text', userData.username);
        smartTablePage.verifyEmail.should('contain.text', userData.email);
        smartTablePage.verifyAge.should('contain.text', userData.age);
    });

    it('Should edit a user', () => {
        const updatedUserData = {
            id: "51",
            firstName: "Jim",
            lastName: "John",
            username: "jimjo",
            email: "jimjo@gmail.com",
            age: "50"
        };

        smartTablePage.updateButton.click();
        smartTablePage.userIdField.clear().type(updatedUserData.id);
        smartTablePage.firstNameField.clear().type(updatedUserData.firstName);
        smartTablePage.lastNameField.clear().type(updatedUserData.lastName);
        smartTablePage.usernameField.clear().type(updatedUserData.username);
        smartTablePage.emailField.clear().type(updatedUserData.email);
        smartTablePage.ageField.clear().type(updatedUserData.age).wait(1000);
        smartTablePage.saveUpdated.click();

        smartTablePage.verifyFirstName.should('contain.text', updatedUserData.firstName);
        smartTablePage.verifyLastName.should('contain.text', updatedUserData.lastName);
        smartTablePage.verifyUsername.should('contain.text', updatedUserData.username);
        smartTablePage.verifyEmail.should('contain.text', updatedUserData.email);
        smartTablePage.verifyAge.should('contain.text', updatedUserData.age);
    });
});
