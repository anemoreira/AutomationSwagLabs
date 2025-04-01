import { CartPage } from '../../page-objects/cart.page';
import { LoginPage } from '../../page-objects/login.page';
import { Credentials } from '../../support/credentials';

const loginPage = new LoginPage();
const cartPage = new CartPage();
const credentials = new Credentials();

context('Module Cart', () => {
  beforeEach(() => {
    cy.visit(loginPage.getUrl());
    loginPage.fillCredentials(credentials.getValidCredentials());
    loginPage.clickLoginButton();
    loginPage.verifyProductsPage();
  });

  describe('Cart Functionality', () => {
    it('Should add a product to cart', () => {
      cartPage.addProductToCart();
      cartPage.verifyCartHasItems();
    });

    it('Should remove a product from the products page', () => {
      cartPage.addProductToCart();
      cartPage.verifyRemoveButtonVisible();
      cartPage.removeProductFromCart();
      cartPage.verifyCartIsEmpty();
    });

    it('Should view the shopping cart', () => {
      cartPage.viewCart();
      cartPage.verifyCartPage();
    });

    it('Should view the shopping cart and return to products page', () => {
      cartPage.viewCart();
      cartPage.clickBackToProducts();
      loginPage.verifyProductsPage();
    });

    it('Should remove a product within the cart page', () => {
      cartPage.addProductToCart();
      cartPage.viewCart();
      cartPage.verifyRemoveButtonVisible();
      cartPage.removeProductFromCart();
      cartPage.verifyCartIsEmpty();
    });

    it('Should add multiple products to cart', () => {
      cartPage.addProductToCart(); 
      cartPage.addSecondProductToCart(); 
      cartPage.verifyCartItemCount(2);
    });

    it('Should maintain cart items after page navigation', () => {
      cartPage.addProductToCart();
      cartPage.viewCart();
      cartPage.clickBackToProducts();
      cartPage.viewCart();
      cartPage.verifyCartHasItems();
    });

    it('Should verify product name consistency between products and cart page', () => {
      cartPage.addProductToCart();
      cartPage.verifyProductNameConsistency();
    });

    it('Should not add duplicate product from products page', () => {
      cartPage.addProductToCart();
      cartPage.verifyCartItemCount(1); 
      cartPage.verifyAddButtonNotVisible();
    });
  });
});
