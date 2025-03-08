/**
 * Testes do módulo de login
 * Este arquivo contém testes automatizados para validar a funcionalidade de login do sistema,
 * incluindo autenticação, validação de campos obrigatórios e logout.
 */

import { LoginPage } from '../../page-objects/login.page';

// Instância da página de login
const loginPage = new LoginPage();

context('Module Login', () => {
  beforeEach(() => {
    // Acessa a página de login antes de cada teste
    cy.visit(loginPage.url);
  });

  describe('Login Functionality', () => {
    /**
     * Deve ser possível fazer login com sucesso
     */
    it('Should be able to login', () => {
      loginPage.login();
    });

    /**
     * Não deve ser possível fazer login sem fornecer um nome de usuário
     */
    it('Should not be able to login without providing username', () => {
      loginPage.btnLogin().click();
      loginPage.inputUsernameRequired();
    });

    /**
     * Não deve ser possível fazer login sem fornecer uma senha
     */
    it('Should not be able to login without providing password', () => {
      loginPage.inputUsername().type('username');
      loginPage.btnLogin().click();
      loginPage.inputPasswordRequired();
    });

    /**
     * Não deve ser possível fazer login com nome de usuário ou senha inválidos
     */
    it('Should not be able to login with invalid username or password', () => {
      loginPage.inputUsername().type('username');
      loginPage.inputPassword().type('password');
      loginPage.btnLogin().click();
      loginPage.invalidUsernameOrPassword();
    });

    /**
     * Deve ser possível fazer logout do sistema
     */
    it('Should be able to log out of the system', () => {
      loginPage.login();
      loginPage.menuBurger();
      loginPage.linkLogout().click();
      loginPage.isLoginPage();
    });
  });
});
