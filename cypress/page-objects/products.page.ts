export class ProductsPage {
  private readonly selectors = {
    sortContainer: '[data-test="product-sort-container"]',
    activeOption: '.active_option'
  };

  private readonly sortOptions = {
    nameAZ: { value: 'az', label: 'Name (A to Z)' },
    nameZA: { value: 'za', label: 'Name (Z to A)' },
    priceLowToHigh: { value: 'lohi', label: 'Price (low to high)' },
    priceHighToLow: { value: 'hilo', label: 'Price (high to low)' }
  };

  private getSortContainer() {
    return cy.get(this.selectors.sortContainer);
  }

  private getActiveOption() {
    return cy.get(this.selectors.activeOption);
  }

  waitForSortContainer() {
    this.getSortContainer().should('be.visible');
  }

  selectSortOption(optionValue: string) {
    this.getSortContainer().select(optionValue);
  }

  verifySortOptionSelected(expectedLabel: string) {
    this.getActiveOption().should('have.text', expectedLabel);
  }

  sortByNameAZ() {
    this.waitForSortContainer();
    this.selectSortOption(this.sortOptions.nameAZ.value);
    this.verifySortOptionSelected(this.sortOptions.nameAZ.label);
  }

  sortByNameZA() {
    this.waitForSortContainer();
    this.selectSortOption(this.sortOptions.nameZA.value);
    this.verifySortOptionSelected(this.sortOptions.nameZA.label);
  }

  sortByPriceLowToHigh() {
    this.waitForSortContainer();
    this.selectSortOption(this.sortOptions.priceLowToHigh.value);
    this.verifySortOptionSelected(this.sortOptions.priceLowToHigh.label);
  }

  sortByPriceHighToLow() {
    this.waitForSortContainer();
    this.selectSortOption(this.sortOptions.priceHighToLow.value);
    this.verifySortOptionSelected(this.sortOptions.priceHighToLow.label);
  }
}
