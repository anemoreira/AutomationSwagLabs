export class CartPage {
    private readonly selectors = {
      btnAddToCart: '[data-test="add-to-cart-sauce-labs-backpack"]',
      btnAddSecondProduct: '[data-test="add-to-cart-sauce-labs-bike-light"]', // Adiciona um segundo produto diferente
      btnBackProducts: '[data-test="continue-shopping"]',
      btnRemoveProductFromCart: '[data-test="remove-sauce-labs-backpack"]',
      iconCart: '.shopping_cart_link',
      cartBadge: '.shopping_cart_badge',
      productName: '#item_4_title_link .inventory_item_name',
      productNameInCart: '.cart_item .inventory_item_name'
    };
  
    private getAddToCartButton() {
      return cy.get(this.selectors.btnAddToCart);
    }
  
    private getAddSecondProductButton() {
      return cy.get(this.selectors.btnAddSecondProduct);
    }
  
    private getBackToProductsButton() {
      return cy.get(this.selectors.btnBackProducts);
    }
  
    private getRemoveButton() {
      return cy.get(this.selectors.btnRemoveProductFromCart);
    }
  
    private getCartIcon() {
      return cy.get(this.selectors.iconCart);
    }
  
    private getCartBadge() {
      return cy.get(this.selectors.cartBadge);
    }
  
    private getProductName() {
      return cy.get(this.selectors.productName);
    }
  
    private getProductNameInCart() {
      return cy.get(this.selectors.productNameInCart);
    }
  
    addProductToCart() {
      this.getAddToCartButton().click();
    }
  
    addSecondProductToCart() {
      this.getAddSecondProductButton().click();
    }
  
    removeProductFromCart() {
      this.getRemoveButton().click();
    }
  
    viewCart() {
      this.getCartIcon().click();
    }
  
    clickBackToProducts() {
      this.getBackToProductsButton().click();
    }
  
    verifyCartHasItems() {
      this.getCartBadge().should('be.visible');
    }
  
    verifyCartIsEmpty() {
      this.getCartBadge().should('not.exist');
    }
  
    verifyRemoveButtonVisible() {
      this.getRemoveButton().should('be.visible');
    }
  
    verifyAddButtonNotVisible() {
      this.getAddToCartButton().should('not.exist');
    }
  
    verifyCartPage() {
      cy.url().should('contain', 'cart.html');
    }
  
    verifyProductNameConsistency() {
      let productName: string;
      this.getProductName()
        .invoke('text')
        .then((text: string) => {
          productName = text.trim();
        });
      this.viewCart();
      this.getProductNameInCart()
        .should('be.visible')
        .and(($el) => {
          expect($el.text().trim()).to.eq(productName);
        });
    }
  
    verifyCartItemCount(expectedCount: number) {
      this.getCartBadge()
        .should('be.visible')
        .and('have.text', expectedCount.toString());
    }
  }
