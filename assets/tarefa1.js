class ShopifyAcademyTarefa1 extends HTMLElement {
  constructor() {
    super();
    
    this.addAllProducts = this.querySelector('#addAllProducts');

    this.productsIds = [];
    this.items = this.querySelectorAll('.item');
    for (let index = 0; index < this.items.length; index++) {
      const element = this.items[index];
      this.productsIds.push(parseInt(element.getAttribute('data-id')));
    }

    this.init();
  }

  init() {
    this.addAllProducts.addEventListener('click', this.addProducts.bind(this));
  }

  addProducts() {
    console.log(this)
    console.log('>> addProducts')
    console.log(this.productsIds)

    // items: [
    //   {
    //    id: 36110175633573,
    //    quantity: 2
    //   }
    // ]

    const items = [];
    for (let index = 0; index < this.productsIds.length; index++) {
      const element = this.productsIds[index];
      items.push({
        id: element,
        quantity: 1
      });
    }

    console.log(items)


    let formData = {
      'items': items
    };
    fetch('/cart/add.js', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data)
      location.href = '/cart'
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }
}
customElements.define('shopify-academy-tarefa1', ShopifyAcademyTarefa1);
