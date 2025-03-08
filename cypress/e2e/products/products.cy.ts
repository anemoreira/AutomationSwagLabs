/**
 * Testes do módulo de produtos
 * Este arquivo contém testes automatizados para validar a funcionalidade de ordenação de produtos,
 * garantindo que os produtos possam ser organizados corretamente por nome e preço.
 */

import { LoginPage } from '../../page-objects/login.page';
import { ProductsPage } from '../../page-objects/products.page';

// Instâncias das páginas utilizadas nos testes
const loginPage = new LoginPage();
const productsPage = new ProductsPage();

context('Module Products', () => {
  beforeEach(() => {
    // Acessa a página de login antes de cada teste
    cy.visit(loginPage.url);
  });

  describe('Products Functionality', () => {
    /**
     * Deve ser possível ordenar os produtos pelo nome em ordem decrescente (Z-A)
     */
    it('Should be able to sort the product name in descending order from Z-A', () => {
      loginPage.login();
      productsPage.selectProductSortByNameZA();
    });

    /**
     * Deve ser possível ordenar os produtos pelo nome em ordem crescente (A-Z)
     */
    it('Should be able to sort product name in ascending order from A-Z', () => {
      loginPage.login();
      productsPage.selectProductSortByNameAZ();
    });

    /**
     * Deve ser possível ordenar os produtos pelo preço do menor para o maior
     */
    it('Should be able to sort the product price from low to high', () => {
      loginPage.login();
      productsPage.selectProductSortByPriceLowToHigh();
    });

    /**
     * Deve ser possível ordenar os produtos pelo preço do maior para o menor
     */
    it('Should be able to sort the product price from high to low', () => {
      loginPage.login();
      productsPage.selectProductSortByPriceHighToLow();
    });
  });
});
