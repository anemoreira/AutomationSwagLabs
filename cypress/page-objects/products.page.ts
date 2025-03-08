export class ProductsPage {
  // Seletores usados para interagir com a página de produtos
  private readonly selectors = {
    sortContainer: '[data-test="product-sort-container"]',  // Seletor do dropdown de ordenação
    activeOption: '.active_option',                         // Seletor da opção ativa no dropdown
  };

  /** 
   * Aguarda o seletor do dropdown de ordenação estar visível antes de interagir
   * Esta função é útil para garantir que o dropdown está completamente carregado e visível
   * antes de tentarmos interagir com ele. Isso ajuda a evitar falhas no teste devido à 
   * falta de visibilidade do elemento.
   */
  waitForSortContainer(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.selectors.sortContainer).should("be.visible");
  }

  /** 
   * Seleciona a opção de ordenação dos produtos por nome (A-Z) no dropdown.
   * 1. Chama a função `waitForSortContainer()` para garantir que o dropdown está visível.
   * 2. Seleciona a opção "az" (A-Z) do dropdown de ordenação.
   * 3. Verifica se a opção ativa no dropdown é "Name (A to Z)" para garantir que a ordenação foi aplicada corretamente.
   */
  selectProductSortByNameAZ(): void {
    this.waitForSortContainer().select("az");  // Seleciona "A-Z"
    cy.get(this.selectors.activeOption).should("have.text", "Name (A to Z)");  // Verifica a opção ativa
  }

  /** 
   * Seleciona a opção de ordenação dos produtos por nome (Z-A) no dropdown.
   * 1. Chama a função `waitForSortContainer()` para garantir que o dropdown está visível.
   * 2. Seleciona a opção "za" (Z-A) do dropdown de ordenação.
   * 3. Verifica se a opção ativa no dropdown é "Name (Z to A)" para garantir que a ordenação foi aplicada corretamente.
   */
  selectProductSortByNameZA(): void {
    this.waitForSortContainer().select("za");  // Seleciona "Z-A"
    cy.get(this.selectors.activeOption).should("have.text", "Name (Z to A)");  // Verifica a opção ativa
  }

  /** 
   * Seleciona a opção de ordenação dos produtos por preço (alto para baixo) no dropdown.
   * 1. Chama a função `waitForSortContainer()` para garantir que o dropdown está visível.
   * 2. Seleciona a opção "hilo" (high to low) do dropdown de ordenação.
   * 3. Verifica se a opção ativa no dropdown é "Price (high to low)" para garantir que a ordenação foi aplicada corretamente.
   */
  selectProductSortByPriceHighToLow(): void {
    this.waitForSortContainer().select("hilo");  // Seleciona "Preço (alto para baixo)"
    cy.get(this.selectors.activeOption).should("have.text", "Price (high to low)");  // Verifica a opção ativa
  }

  /** 
   * Seleciona a opção de ordenação dos produtos por preço (baixo para alto) no dropdown.
   * 1. Chama a função `waitForSortContainer()` para garantir que o dropdown está visível.
   * 2. Seleciona a opção "lohi" (low to high) do dropdown de ordenação.
   * 3. Verifica se a opção ativa no dropdown é "Price (low to high)" para garantir que a ordenação foi aplicada corretamente.
   */
  selectProductSortByPriceLowToHigh(): void {
    this.waitForSortContainer().select("lohi");  // Seleciona "Preço (baixo para alto)"
    cy.get(this.selectors.activeOption).should("have.text", "Price (low to high)");  // Verifica a opção ativa
  }
}
