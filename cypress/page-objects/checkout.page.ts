export class CheckoutPage {
  // Armazena as variáveis de ambiente para o nome, sobrenome e código postal
  public readonly textFirstName: string = Cypress.env("textFirstName");
  public readonly textLastName: string = Cypress.env("textLastName");
  public readonly textPostalCode: string = Cypress.env("textPostalCode");

  // Define os seletores dos elementos da página de checkout
  private readonly selectors = {
    btnCancel: '[data-test="cancel"]', // Seletor para o botão de cancelar
    btnCheckout: '[data-test="checkout"]', // Seletor para o botão de checkout
    btnContinue: '[data-test="continue"]', // Seletor para o botão de continuar
    btnFinish: '[data-test="finish"]', // Seletor para o botão de finalizar compra
    inputFirstName: '[data-test="firstName"]', // Seletor para o campo de primeiro nome
    inputLastName: '[data-test="lastName"]', // Seletor para o campo de sobrenome
    inputPostalCode: '[data-test="postalCode"]', // Seletor para o campo de código postal
    errorMessage: '[data-test="error"]', // Seletor para a mensagem de erro
    errorContainer: '.error-message-container', // Seletor para o container de erros
    nameProductInCheckoutCompletePage: '.inventory_item_name', // Seletor para o nome do produto na página de checkout
  };

  // Função que retorna o botão de cancelamento
  btnCancel(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.selectors.btnCancel);
  }

  // Função que retorna o botão de checkout
  btnCheckout(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.selectors.btnCheckout);
  }

  // Função que retorna o botão de continuar
  btnContinue(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.selectors.btnContinue);
  }

  // Função que retorna o botão de finalizar compra
  btnFinish(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.selectors.btnFinish);
  }

  // Função que retorna o campo de primeiro nome
  inputFirstName(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.selectors.inputFirstName);
  }

  // Função que verifica se a mensagem de erro de "Primeiro Nome" é exibida
  inputFirstNameRequired(): void {
    cy.get(this.selectors.errorContainer).should('be.visible'); // Verifica se o container de erro está visível
    cy.get(this.selectors.errorMessage).should(
      'have.text',
      'Error: First Name is required' // Verifica a mensagem de erro associada ao campo
    );
  }

  // Função que retorna o campo de sobrenome
  inputLastName(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.selectors.inputLastName);
  }

  // Função que verifica se a mensagem de erro de "Sobrenome" é exibida
  inputLastNameRequired(): void {
    cy.get(this.selectors.errorContainer).should('be.visible'); // Verifica se o container de erro está visível
    cy.get(this.selectors.errorMessage).should(
      'have.text',
      'Error: Last Name is required' // Verifica a mensagem de erro associada ao campo
    );
  }

  // Função que retorna o campo de código postal
  inputPostalCode(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.selectors.inputPostalCode);
  }

  // Função que verifica se a mensagem de erro de "Código Postal" é exibida
  inputPostalCodeRequired(): void {
    cy.get(this.selectors.errorContainer).should('be.visible'); // Verifica se o container de erro está visível
    cy.get(this.selectors.errorMessage).should(
      'have.text',
      'Error: Postal Code is required' // Verifica a mensagem de erro associada ao campo
    );
  }

  // Função que verifica se a página de checkout foi completada com sucesso
  isCheckoutPageComplete(): void {
    cy.url().should('contain', 'checkout-complete.html'); // Verifica se a URL contém 'checkout-complete.html'
  }

  // Função que verifica se estamos na primeira etapa da página de checkout
  isCheckoutPageStepOne(): void {
    cy.url().should('contain', 'checkout-step-one.html'); // Verifica se a URL contém 'checkout-step-one.html'
  }

  // Função que verifica se estamos na segunda etapa da página de checkout
  isCheckoutPageStepTwo(): void {
    cy.url().should('contain', 'checkout-step-two.html'); // Verifica se a URL contém 'checkout-step-two.html'
  }

  // Função que retorna o nome do produto na página de checkout após a conclusão da compra
  nameProductInCheckoutCompletePage(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.selectors.nameProductInCheckoutCompletePage);
  }
}
