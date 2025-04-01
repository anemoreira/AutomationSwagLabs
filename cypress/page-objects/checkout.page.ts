export class CheckoutPage {
  private readonly selectors = {
    btnCancel: '[data-test="cancel"]',
    btnCheckout: '[data-test="checkout"]',
    btnContinue: '[data-test="continue"]',
    btnFinish: '[data-test="finish"]',
    inputFirstName: '[data-test="firstName"]',
    inputLastName: '[data-test="lastName"]',
    inputPostalCode: '[data-test="postalCode"]',
    errorMessage: '[data-test="error"]',
    errorContainer: '.error-message-container',
    nameProductInCheckoutCompletePage: '.inventory_item_name'
  };

  private readonly errorMessages = {
    firstNameRequired: 'Error: First Name is required',
    lastNameRequired: 'Error: Last Name is required',
    postalCodeRequired: 'Error: Postal Code is required'
  };

  private getCancelButton() {
    return cy.get(this.selectors.btnCancel);
  }

  private getCheckoutButton() {
    return cy.get(this.selectors.btnCheckout);
  }

  private getContinueButton() {
    return cy.get(this.selectors.btnContinue);
  }

  private getFinishButton() {
    return cy.get(this.selectors.btnFinish);
  }

  private getFirstNameField() {
    return cy.get(this.selectors.inputFirstName);
  }

  private getLastNameField() {
    return cy.get(this.selectors.inputLastName);
  }

  private getPostalCodeField() {
    return cy.get(this.selectors.inputPostalCode);
  }

  private getErrorContainer() {
    return cy.get(this.selectors.errorContainer);
  }

  private getErrorMessage() {
    return cy.get(this.selectors.errorMessage);
  }


  fillFirstName(firstName: string) {
    this.getFirstNameField().type(firstName);
  }

  fillLastName(lastName: string) {
    this.getLastNameField().type(lastName);
  }

  fillPostalCode(postalCode: string) {
    this.getPostalCodeField().type(postalCode);
  }

  fillCheckoutForm({ firstName, lastName, postalCode }: { firstName: string; lastName: string; postalCode: string }) {
    this.fillFirstName(firstName);
    this.fillLastName(lastName);
    this.fillPostalCode(postalCode);
  }

  clickCheckoutButton() {
    this.getCheckoutButton().click();
  }

  clickContinueButton() {
    this.getContinueButton().click();
  }

  clickFinishButton() {
    this.getFinishButton().click();
  }

  clickCancelButton() {
    this.getCancelButton().click();
  }

  verifyCheckoutStepOne() {
    cy.url().should('contain', 'checkout-step-one.html');
  }

  verifyCheckoutStepTwo() {
    cy.url().should('contain', 'checkout-step-two.html');
  }

  verifyCheckoutComplete() {
    cy.url().should('contain', 'checkout-complete.html');
  }

  verifyFirstNameRequiredError() {
    this.getErrorContainer().should('be.visible');
    this.getErrorMessage().should('have.text', this.errorMessages.firstNameRequired);
  }

  verifyLastNameRequiredError() {
    this.getErrorContainer().should('be.visible');
    this.getErrorMessage().should('have.text', this.errorMessages.lastNameRequired);
  }

  verifyPostalCodeRequiredError() {
    this.getErrorContainer().should('be.visible');
    this.getErrorMessage().should('have.text', this.errorMessages.postalCodeRequired);
  }

  getProductNameInCheckoutComplete(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.selectors.nameProductInCheckoutCompletePage);
  }
}
