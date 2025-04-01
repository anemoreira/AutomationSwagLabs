import { LoginPage } from '../../page-objects/login.page';
import { ProductsPage } from '../../page-objects/products.page';
import { Credentials } from '../../support/credentials';

const loginPage = new LoginPage();
const productsPage = new ProductsPage();
const credentials = new Credentials();

context('Module Products', () => {
  beforeEach(() => {
    cy.visit(loginPage.getUrl());
    loginPage.fillCredentials(credentials.getValidCredentials());
    loginPage.clickLoginButton();
    loginPage.verifyProductsPage();
  });

  describe('Products Functionality', () => {
    it('Should sort the product name in descending order from Z-A', () => {
      productsPage.sortByNameZA();
    });

    it('Should sort product name in ascending order from A-Z', () => {
      productsPage.sortByNameAZ();
    });

    it('Should sort the product price from low to high', () => {
      productsPage.sortByPriceLowToHigh();
    });

    it('Should sort the product price from high to low', () => {
      productsPage.sortByPriceHighToLow();
    });
  });
});
