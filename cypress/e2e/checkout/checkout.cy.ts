import { CartPage } from '../../page-objects/cart.page';
import { CheckoutPage } from '../../page-objects/checkout.page';
import { LoginPage } from '../../page-objects/login.page';
import { Credentials } from '../../support/credentials';

const loginPage = new LoginPage();
const cartPage = new CartPage();
const checkoutPage = new CheckoutPage();
const credentials = new Credentials();

context('Module Checkout', () => {
  beforeEach(() => {
    cy.visit(loginPage.getUrl());
    loginPage.fillCredentials(credentials.getValidCredentials());
    loginPage.clickLoginButton();
    loginPage.verifyProductsPage();
    cartPage.addProductToCart();
    cartPage.viewCart();
  });

  describe('Checkout Functionality', () => {
    it('Should complete a purchase', () => {
      checkoutPage.clickCheckoutButton();
      checkoutPage.verifyCheckoutStepOne();
      checkoutPage.fillCheckoutForm({
        firstName: Cypress.env("textFirstName"),
        lastName: Cypress.env("textLastName"),
        postalCode: Cypress.env("textPostalCode")
      });
      checkoutPage.clickContinueButton();
      checkoutPage.verifyCheckoutStepTwo();
      checkoutPage.clickFinishButton();
      checkoutPage.verifyCheckoutComplete();
    });

    it('Should go to the first step checkout page and cancel', () => {
      checkoutPage.clickCheckoutButton();
      checkoutPage.verifyCheckoutStepOne();
      checkoutPage.clickCancelButton();
      cartPage.verifyCartPage();
    });

    it('Should go to the second step checkout page and cancel', () => {
      checkoutPage.clickCheckoutButton();
      checkoutPage.verifyCheckoutStepOne();
      checkoutPage.fillCheckoutForm({
        firstName: Cypress.env("textFirstName"),
        lastName: Cypress.env("textLastName"),
        postalCode: Cypress.env("textPostalCode")
      });
      checkoutPage.clickContinueButton();
      checkoutPage.verifyCheckoutStepTwo();
      checkoutPage.clickCancelButton();
      loginPage.verifyProductsPage();
    });

    it('Should not checkout without providing first name', () => {
      checkoutPage.clickCheckoutButton();
      checkoutPage.verifyCheckoutStepOne();
      checkoutPage.clickContinueButton();
      checkoutPage.verifyFirstNameRequiredError();
    });

    it('Should not checkout without providing last name', () => {
      checkoutPage.clickCheckoutButton();
      checkoutPage.verifyCheckoutStepOne();
      checkoutPage.fillFirstName(Cypress.env("textFirstName"));
      checkoutPage.clickContinueButton();
      checkoutPage.verifyLastNameRequiredError();
    });

    it('Should not checkout without providing postal code', () => {
      checkoutPage.clickCheckoutButton();
      checkoutPage.verifyCheckoutStepOne();
      checkoutPage.fillFirstName(Cypress.env("textFirstName"));
      checkoutPage.fillLastName(Cypress.env("textLastName"));
      checkoutPage.clickContinueButton();
      checkoutPage.verifyPostalCodeRequiredError();
    });
  });
});
