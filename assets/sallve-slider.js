class SallveSlider extends HTMLElement {
  constructor() {
    super();

    this.slider = this.querySelector('.sallve-slider__inner');

    this.init();
  }

  init() {
    $(this.slider).slick();
  }
}
customElements.define('sallve-slider', SallveSlider);