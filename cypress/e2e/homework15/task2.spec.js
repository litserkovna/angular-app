import '../homework15/logincommand'

describe('Login Page', () => {
    it('should login and redirect to the Dashboard', () => {
        const email = 'testemail@gmail.com';
        const password = '1234567890';

        cy.login(email, password);
    });
});

