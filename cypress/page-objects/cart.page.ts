export class CartPage {
    // Define os seletores dos elementos da página de carrinho
    private selectors = {
        btnAddToCart: '[data-test="add-to-cart-sauce-labs-backpack"]', // Seletor para o botão de adicionar ao carrinho
        btnBackProducts: '[data-test="continue-shopping"]', // Seletor para o botão de voltar para os produtos
        btnRemoveProductFromCart: '[data-test="remove-sauce-labs-backpack"]', // Seletor para o botão de remover o produto do carrinho
        iconCart: '.shopping_cart_link', // Seletor para o ícone de carrinho de compras
        cartBadge: '.shopping_cart_badge', // Seletor para o badge do carrinho (indica número de produtos)
        productName: '#item_4_title_link .inventory_item_name', // Seletor para o nome do produto na página de produtos
        productNameInCart: '.cart_item .inventory_item_name' // Seletor para o nome do produto na página de carrinho
    };
  
    // Função que adiciona um produto ao carrinho
    addCart(): void {
        this.btnAddToCart().click(); // Clica no botão de adicionar ao carrinho
        this.hasACart(); // Verifica se o carrinho agora tem produtos
    }
  
    // Função que retorna o elemento do botão de adicionar ao carrinho
    btnAddToCart() {
        return cy.get(this.selectors.btnAddToCart);
    }
  
    // Função que retorna o elemento do botão de voltar para a página de produtos
    btnBackProducts() {
        return cy.get(this.selectors.btnBackProducts);
    }
  
    // Função que retorna o elemento do botão de remover o produto do carrinho
    btnRemoveProductFromCart() {
        return cy.get(this.selectors.btnRemoveProductFromCart);
    }
  
    // Função que acessa a página do carrinho de compras
    cart(): void {
        this.iconCart().click(); // Clica no ícone do carrinho
        this.isCartPage(); // Verifica se a página atual é a página do carrinho
    }
  
    // Função que verifica se o carrinho tem produtos (verificando se o badge está visível)
    hasACart(): void {
        cy.get(this.selectors.cartBadge).should("be.visible");
    }
  
    // Função que verifica se o botão de remover o produto do carrinho está visível
    hasRemoveButton(): void {
        cy.get(this.selectors.btnRemoveProductFromCart).should("be.visible");
    }
  
    // Função que retorna o elemento do ícone de carrinho
    iconCart() {
        return cy.get(this.selectors.iconCart);
    }
  
    // Função que verifica se a URL da página contém 'cart.html' (indicando que estamos na página do carrinho)
    isCartPage(): void {
        cy.url().should("contain", "cart.html");
    }
  
    // Função que verifica se o carrinho está vazio (badge do carrinho não deve existir)
    isEmptyCart(): void {
        cy.get(this.selectors.cartBadge).should("not.exist");
    }
  
    // Função que retorna o elemento do nome do produto na página de produtos
    nameProduct() {
        return cy.get(this.selectors.productName);
    }
  
    // Função que retorna o elemento do nome do produto na página de carrinho
    nameProductInCartPage() {
        return cy.get(this.selectors.productNameInCart);
    }
  
    // Função que valida se o nome do produto na página do carrinho é igual ao nome do produto na página de produtos
    validateProductName(): void {
        let productName: string;
  
        // Captura o nome do produto na página de produtos
        cy.get(this.selectors.productName)
            .invoke("text") // Pega o texto do nome do produto
            .then((text: string) => {
                productName = text.trim(); // Remove espaços extras e armazena o nome do produto
            });
  
        // Acessa o carrinho
        this.cart();
  
        // Verifica se o nome do produto no carrinho é o mesmo que o nome na página de produtos
        cy.get(this.selectors.productNameInCart)
            .should("be.visible") // Verifica se o nome do produto está visível na página de carrinho
            .and(($el) => {
                // Compara o nome do produto no carrinho com o nome capturado na página de produtos
                expect($el.text().trim()).to.eq(productName);
            });
    }
  }
  