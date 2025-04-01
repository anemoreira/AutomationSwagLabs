export class LoginPage {
  private url = "/";
  
  private readonly selectors = {
    btnLogin: '[data-test="login-button"]',
    inputPassword: '[data-test="password"]',
    inputUsername: '[data-test="username"]',
    errorMessage: '[data-test="error"]',
    errorContainer: '.error-message-container',
    linkLogout: '#logout_sidebar_link',
    menuButton: '#react-burger-menu-btn',
    menuContainer: '.bm-menu',
  };

  private readonly errorMessages = {
    usernameRequired: "Epic sadface: Username is required",
    passwordRequired: "Epic sadface: Password is required",
    invalidCredentials: "Epic sadface: Username and password do not match any user in this service"
  };

  getUrl(): string {
    return this.url;
  }

  private getUsernameField() {
    return cy.get(this.selectors.inputUsername);
  }

  private getPasswordField() {
    return cy.get(this.selectors.inputPassword);
  }

  private getLoginButton() {
    return cy.get(this.selectors.btnLogin);
  }

  private getErrorContainer() {
    return cy.get(this.selectors.errorContainer);
  }

  private getErrorMessage() {
    return cy.get(this.selectors.errorMessage);
  }

  private getMenuButton() {
    return cy.get(this.selectors.menuButton);
  }

  private getMenuContainer() {
    return cy.get(this.selectors.menuContainer);
  }

  private getLogoutLink() {
    return cy.get(this.selectors.linkLogout);
  }

  fillUsername(username: string) {
    this.getUsernameField().type(username);
  }

  fillPassword(password: string) {
    this.getPasswordField().type(password, { log: false });
  }

  fillCredentials({ username, password }: { username: string; password: string }) {
    this.fillUsername(username);
    this.fillPassword(password);
  }

  clickLoginButton() {
    this.getLoginButton().click();
  }

  performLogout() {
    this.getMenuButton().click();
    this.getMenuContainer().should('be.visible');
    this.getLogoutLink().click();
  }

  clearFormFields() {
    this.getUsernameField().clear();
    this.getPasswordField().clear();
  }

  verifyUsernameRequiredError() {
    this.getErrorContainer().should('be.visible');
    this.getErrorMessage().should('have.text', this.errorMessages.usernameRequired);
  }

  verifyPasswordRequiredError() {
    this.getErrorContainer().should('be.visible');
    this.getErrorMessage().should('have.text', this.errorMessages.passwordRequired);
  }

  verifyInvalidCredentialsError() {
    this.getErrorContainer().should('be.visible');
    this.getErrorMessage().should('have.text', this.errorMessages.invalidCredentials);
  }

  verifyProductsPage() {
    cy.url().should('contain', 'inventory.html');
  }

  verifyLoginPage() {
    cy.url().should('eq', Cypress.config().baseUrl);
  }

  verifyEmptyFields() {
    this.getUsernameField().should('have.value', '');
    this.getPasswordField().should('have.value', '');
  }
}
