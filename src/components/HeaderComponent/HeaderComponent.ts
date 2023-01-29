import Component from "../Component/Component.js";

class HeaderComponent extends Component {
  constructor(parentElement: HTMLElement) {
    super(parentElement, "page_header", "header");
  }

  render(): void {
    super.render();
    this.domElement.innerHTML = `<img src="pokeball.png" alt="pokeball"> 
    <img src="pokemon-logo.svg" alt="pokemon logo">
    <img src="pokeball.png" alt="pokeball">
    `;
  }
}

export default HeaderComponent;
