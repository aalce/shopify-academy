class ShopifyAcademyTarefa1 extends HTMLElement {
  constructor() {
    super();
    
    this.addAllProducts = this.querySelector('#addAllProducts');

    this.init();

  }

  init() {
    this.addAllProducts.addEventListener('click', this.addProducts);
  }

  addProducts() {
    console.log('>> addProducts')
  }
}
customElements.define('shopify-academy-tarefa1', ShopifyAcademyTarefa1);
