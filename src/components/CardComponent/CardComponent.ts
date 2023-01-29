import { counter, pokemonDataList } from "../../index.js";
import Component from "../Component/Component.js";

class CardComponent extends Component {
  constructor(parentElement: HTMLElement) {
    super(parentElement, "pokemon-card", "article");
  }

  render(): void {
    super.render();
    this.domElement.innerHTML = `<img src="${
      pokemonDataList[counter].image
    }" alt="pokemon image">
    <div class="card-text">
    <h2>${pokemonDataList[counter].name.toUpperCase()}</h2>
    <span class="pokemon-id">ID: #${pokemonDataList[counter].id}</span>
    </div>
    `;
  }
}

export default CardComponent;
