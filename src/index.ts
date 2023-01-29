import CardComponent from "./components/CardComponent/CardComponent.js";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent.js";
import { PageComponent } from "./components/PageComponent/PageComponent.js";
import getPokeApi from "./getPokeApi/getPokeApi.js";
import getPokemonsData from "./getPokemonData/getPokemonsData.js";

export let counter: number;
const mainUrl = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=80";

const mainArray = await getPokeApi(mainUrl);

export const pokemonDataList = await getPokemonsData(mainArray);

const page = new PageComponent(document.body);
page.render();

const header = new HeaderComponent(page.domElement);
header.render();

const buttonsContainer = document.createElement("div");
buttonsContainer.classList.add("buttons-container");
page.domElement.appendChild(buttonsContainer);

const prevButton = document.createElement("button");
prevButton.classList.add("prev-button");
prevButton.textContent = "<- Previous";
prevButton.addEventListener("click", () => {
  startIndex -= pageSize;
  renderCards(startIndex, startIndex + pageSize);
});
buttonsContainer.appendChild(prevButton);

const nextButton = document.createElement("button");
nextButton.classList.add("next-button");
nextButton.textContent = "Next ->";
nextButton.addEventListener("click", () => {
  startIndex += pageSize;
  renderCards(startIndex, startIndex + pageSize);
});
buttonsContainer.appendChild(nextButton);

const pokemonsContainer = document.createElement("div");
pokemonsContainer.classList.add("pokemons-container");
page.domElement.appendChild(pokemonsContainer);

function renderCards(start: number, end: number) {
  while (pokemonsContainer.firstChild) {
    pokemonsContainer.removeChild(pokemonsContainer.firstChild);
  }

  for (
    counter = start;
    counter < end && counter < pokemonDataList.length;
    counter++
  ) {
    const card = new CardComponent(pokemonsContainer);
    card.render();
  }
}

let startIndex = 0;
const pageSize = 20;

renderCards(startIndex, startIndex + pageSize);
