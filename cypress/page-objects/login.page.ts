export class LoginPage {
  // URL da página de login (o caminho relativo)
  url = "/";

  // Agrupando todos os seletores em um objeto `selectors`
  private selectors = {
    btnLogin: '[data-test="login-button"]',      // Botão de login
    inputPassword: '[data-test="password"]',      // Campo de senha
    inputUsername: '[data-test="username"]',      // Campo de nome de usuário
    errorMessage: '[data-test="error"]',          // Mensagem de erro
    errorContainer: '.error-message-container',   // Container de erro
    linkLogout: '#logout_sidebar_link',           // Link para logout no menu lateral
    menuButton: '#react-burger-menu-btn',         // Botão do menu lateral (hamburguer menu)
    menuContainer: '.bm-menu',                    // Container do menu lateral
  };

  // Função que retorna o botão de login
  btnLogin() {
    return cy.get(this.selectors.btnLogin);
  }

  // Função que retorna o campo de entrada da senha
  inputPassword() {
    return cy.get(this.selectors.inputPassword);
  }

  // Função que valida se a mensagem de erro para o campo de senha aparece quando o campo é deixado vazio
  inputPasswordRequired() {
    cy.get(this.selectors.errorContainer).should("be.visible"); // Verifica se o container de erro está visível
    cy.get(this.selectors.errorMessage).should(
      "have.text",
      "Epic sadface: Password is required" // Verifica se a mensagem de erro correta é exibida
    );
  }

  // Função que retorna o campo de entrada do nome de usuário
  inputUsername() {
    return cy.get(this.selectors.inputUsername);
  }

  // Função que valida se a mensagem de erro para o campo de nome de usuário aparece quando o campo é deixado vazio
  inputUsernameRequired() {
    cy.get(this.selectors.errorContainer).should("be.visible"); // Verifica se o container de erro está visível
    cy.get(this.selectors.errorMessage).should(
      "have.text",
      "Epic sadface: Username is required" // Verifica a mensagem de erro correta é exibida
    );
  }

  // Função que valida se a mensagem de erro aparece quando as credenciais de login são inválidas
  invalidUsernameOrPassword() {
    cy.get(this.selectors.errorContainer).should("be.visible"); // Verifica se o container de erro está visível
    cy.get(this.selectors.errorMessage).should(
      "have.text",
      "Epic sadface: Username and password do not match any user in this service" // Verifica a mensagem de erro
    );
  }

  // Função que verifica se estamos na página de produtos após o login bem-sucedido
  isProductsPage() {
    cy.url().should("contain", "inventory.html"); // Verifica se a URL contém 'inventory.html', indicando que a página de produtos foi carregada
  }

  // Função que verifica se estamos na página de login (caso ainda não tenha feito login)
  isLoginPage() {
    cy.url().should("eq", Cypress.config().baseUrl); // Verifica se a URL corresponde à URL base configurada no Cypress
  }

  // Função que retorna o link para o logout no menu lateral
  linkLogout() {
    return cy.get(this.selectors.linkLogout);
  }

  // Função que realiza o login utilizando as credenciais fornecidas no arquivo de ambiente
  login() {
    // Obtendo credenciais de login armazenadas no arquivo de ambiente do Cypress
    const username = Cypress.env("username"); // Obtém o nome de usuário
    const password = Cypress.env("password"); // Obtém a senha

    // Verificando se as credenciais estão definidas
    if (!username || !password) {
      throw new Error(
        "⚠️ Error: Login credentials were not found. Check the .env file!" 
        // Se as credenciais não estiverem definidas, lança um erro
      );
    }

    // Exibindo as credenciais no console para depuração (remova isso em produção)
    console.log("🔹 Cypress.env -> Username:", username); 
    console.log("🔹 Cypress.env -> Password:", password ? "*****" : "NOT DEFINED"); // Exibe a senha (mas com a senha mascarada para segurança)

    // Realizando o login com as credenciais
    this.inputUsername().type(username); // Preenche o campo de nome de usuário com o valor armazenado
    this.inputPassword().type(password, { log: false }); // Preenche o campo de senha com o valor armazenado (não loga a senha para segurança)
    this.btnLogin().click(); // Clica no botão de login
    this.isProductsPage(); // Verifica se a URL agora contém 'inventory.html', confirmando que estamos na página de produtos
  }

  // Função que abre o menu lateral (hamburguer menu)
  menuBurger() {
    cy.get(this.selectors.menuButton).click(); // Clica no botão do menu lateral
    cy.get(this.selectors.menuContainer).should("be.visible"); // Verifica se o menu lateral está visível após o clique
  }
}
