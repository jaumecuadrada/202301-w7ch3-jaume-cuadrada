import Component from "../Component/Component.js";

class HeaderComponent extends Component {
  constructor(parentElement: HTMLElement) {
    super(parentElement, "page_header", "header");
  }

  render(): void {
    super.render();
    this.domElement.innerHTML = `<img src="pokemon-logo.svg" alt="pokemon logo">`;
  }
}

export default HeaderComponent;
