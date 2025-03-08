import { CartPage } from '../../page-objects/cart.page';
import { LoginPage } from '../../page-objects/login.page';

const loginPage = new LoginPage();
const cartPage = new CartPage();

context('Module Cart', () => {
  beforeEach(() => {
    cy.visit(loginPage.url);
  });

  describe('Cart Functionality', () => {
    /**
     * Deve adicionar um produto ao carrinho com sucesso
     * Esse teste verifica se um produto pode ser adicionado ao carrinho após o login
     */
    it('Should be able to add a product to cart', () => {
      loginPage.login();
      cartPage.addCart();
    });

    /**
     * Deve remover um produto da página de produtos
     * O teste adiciona um item ao carrinho, verifica se o botão de remover está visível,
     * e depois clica para remover, garantindo que o carrinho fique vazio.
     */
    it('Should be able to remove a product from the products page', () => {
      loginPage.login();
      cartPage.addCart();
      cartPage.hasRemoveButton();
      cartPage.btnRemoveProductFromCart().click();
      cartPage.isEmptyCart();
    });

    /**
     * Deve visualizar o carrinho de compras
     * Esse teste verifica se o usuário consegue acessar a página do carrinho após o login
     */
    it('Should be able to view the shopping cart', () => {
      loginPage.login();
      cartPage.cart();
    });

    /**
     * Deve visualizar o carrinho e retornar para a página de produtos
     * O teste garante que o usuário possa acessar o carrinho e voltar para a página de produtos
     */
    it('Should be able to view the shopping cart and return to the products page', () => {
      loginPage.login();
      cartPage.cart();
      cartPage.btnBackProducts().click();
      loginPage.isProductsPage();
    });

    /**
     * Deve remover um produto dentro da página do carrinho
     * O teste adiciona um produto, acessa o carrinho, verifica o botão de remoção,
     * e remove o produto, garantindo que o carrinho fique vazio.
     */
    it('Should be able to remove a product within the cart page', () => {
      loginPage.login();
      cartPage.addCart();
      cartPage.cart();
      cartPage.hasRemoveButton();
      cartPage.btnRemoveProductFromCart().click();
      cartPage.isEmptyCart();
    });
  });
});
