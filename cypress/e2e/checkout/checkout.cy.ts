import { CartPage } from '../../page-objects/cart.page';
import { CheckoutPage } from '../../page-objects/checkout.page';
import { LoginPage } from '../../page-objects/login.page';

const loginPage = new LoginPage();
const cartPage = new CartPage();
const checkoutPage = new CheckoutPage();

context('Module Checkout', () => {
  beforeEach(() => {
    cy.visit(loginPage.url);
  });

  describe('Checkout Functionality', () => {
    /**
     * Deve ser possível completar uma compra com sucesso
     */
    it('Should be able to complete a purchase', () => {
      loginPage.login();
      cartPage.addCart();
      cartPage.cart();
      checkoutPage.btnCheckout().click();
      checkoutPage.isCheckoutPageStepOne();
      checkoutPage.inputFirstName().type(checkoutPage.textFirstName);
      checkoutPage.inputLastName().type(checkoutPage.textLastName);
      checkoutPage.inputPostalCode().type(checkoutPage.textPostalCode);
      checkoutPage.btnContinue().click();
      checkoutPage.isCheckoutPageStepTwo();
      checkoutPage.btnFinish().click();
      checkoutPage.isCheckoutPageComplete();
    });

    /**
     * Deve ser possível acessar a primeira etapa do checkout e cancelar a compra
     */
    it('Should be able to go to the first step checkout page and cancel', () => {
      loginPage.login();
      cartPage.addCart();
      cartPage.cart();
      checkoutPage.btnCheckout().click();
      checkoutPage.isCheckoutPageStepOne();
      checkoutPage.btnCancel().click();
      cartPage.isCartPage();
    });

    /**
     * Deve ser possível acessar a segunda etapa do checkout e cancelar a compra
     */
    it('Should be able to go to the second step checkout page and cancel', () => {
      loginPage.login();
      cartPage.addCart();
      cartPage.cart();
      checkoutPage.btnCheckout().click();
      checkoutPage.isCheckoutPageStepOne();
      checkoutPage.inputFirstName().type(checkoutPage.textFirstName);
      checkoutPage.inputLastName().type(checkoutPage.textLastName);
      checkoutPage.inputPostalCode().type(checkoutPage.textPostalCode);
      checkoutPage.btnContinue().click();
      checkoutPage.isCheckoutPageStepTwo();
      checkoutPage.btnCancel().click();
      loginPage.isProductsPage();
    });

    /**
     * Não deve ser possível prosseguir no checkout sem informar o primeiro nome
     */
    it('Should not be able to checkout without providing first name', () => {
      loginPage.login();
      cartPage.addCart();
      cartPage.cart();
      checkoutPage.btnCheckout().click();
      checkoutPage.isCheckoutPageStepOne();
      checkoutPage.btnContinue().click();
      checkoutPage.inputFirstNameRequired();
    });

    /**
     * Não deve ser possível prosseguir no checkout sem informar o sobrenome
     */
    it('Should not be able to checkout without providing last name', () => {
      loginPage.login();
      cartPage.addCart();
      cartPage.cart();
      checkoutPage.btnCheckout().click();
      checkoutPage.isCheckoutPageStepOne();
      checkoutPage.inputFirstName().type(checkoutPage.textFirstName);
      checkoutPage.btnContinue().click();
      checkoutPage.inputLastNameRequired();
    });

    /**
     * Não deve ser possível prosseguir no checkout sem informar o código postal
     */
    it('Should not be able to checkout without providing postal code', () => {
      loginPage.login();
      cartPage.addCart();
      cartPage.cart();
      checkoutPage.btnCheckout().click();
      checkoutPage.isCheckoutPageStepOne();
      checkoutPage.inputFirstName().type(checkoutPage.textFirstName);
      checkoutPage.inputLastName().type(checkoutPage.textLastName);
      checkoutPage.btnContinue().click();
      checkoutPage.inputPostalCodeRequired();
    });
  });
});
