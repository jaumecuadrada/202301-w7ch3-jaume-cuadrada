import CardComponent from "./components/CardComponent/CardComponent.js";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent.js";
import { PageComponent } from "./components/PageComponent/PageComponent.js";
import getPokeApi from "./getPokeApi/getPokeApi.js";
import getPokemonsData from "./getPokemonData/getPokemonsData.js";

export let counter: number;
const mainUrl = "https://pokeapi.co/api/v2/pokemon";

const mainArray = await getPokeApi(mainUrl);

export const pokemonDataList = await getPokemonsData(mainArray);

const page = new PageComponent(document.body);
page.render();

const header = new HeaderComponent(page.domElement);
header.render();

const pokemonsContainer = document.createElement("div");
pokemonsContainer.classList.add("pokemons-container");
page.domElement.appendChild(pokemonsContainer);

for (counter = 0; counter < pokemonDataList.length; counter++) {
  const card = new CardComponent(pokemonsContainer);
  card.render();
}
