import { LoginPage } from '../../page-objects/login.page';
import { Credentials } from '../../support/credentials';

const loginPage = new LoginPage();
const credentials = new Credentials();

context('Module Login', () => {
  beforeEach(() => {
    cy.visit(loginPage.getUrl());
  });

  describe('Login Functionality', () => {
    it('Should login successfully with valid credentials', () => {
      loginPage.fillCredentials(credentials.getValidCredentials());
      loginPage.clickLoginButton();
      loginPage.verifyProductsPage();
    });

    it('Should not login without username', () => {
      loginPage.clickLoginButton();
      loginPage.verifyUsernameRequiredError();
    });

    it('Should not login without password', () => {
      loginPage.fillUsername('username');
      loginPage.clickLoginButton();
      loginPage.verifyPasswordRequiredError();
    });

    it('Should not login with invalid credentials', () => {
      loginPage.fillCredentials(credentials.getInvalidCredentials());
      loginPage.clickLoginButton();
      loginPage.verifyInvalidCredentialsError();
      loginPage.verifyLoginPage();
    });

    it('Should logout successfully', () => {
      loginPage.fillCredentials(credentials.getValidCredentials());
      loginPage.clickLoginButton();
      loginPage.verifyProductsPage();
      loginPage.performLogout();
      loginPage.verifyLoginPage();
    });

    it('Should not login with empty credentials', () => {
      loginPage.clickLoginButton();
      loginPage.verifyUsernameRequiredError();
    });

    it('Should maintain login page url on failed login', () => {
      loginPage.fillCredentials(credentials.getInvalidCredentials());
      loginPage.clickLoginButton();
      loginPage.verifyLoginPage();
    });

    it('Should clear fields after failed login', () => {
      loginPage.fillCredentials(credentials.getInvalidCredentials());
      loginPage.clickLoginButton();
      loginPage.clearFormFields();
      loginPage.verifyEmptyFields();
    });
  });
});
