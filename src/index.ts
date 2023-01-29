import HeaderComponent from "./components/HeaderComponent/HeaderComponent.js";
import { PageComponent } from "./components/PageComponent/PageComponent.js";
import getPokeApi from "./getPokeApi/getPokeApi.js";
import getPokemonsData from "./getPokemonData/getPokemonsData.js";

const mainUrl = "https://pokeapi.co/api/v2/pokemon";

const page = new PageComponent(document.body);
page.render();

const header = new HeaderComponent(page.domElement);
header.render();

const mainArray = await getPokeApi(mainUrl);

await getPokemonsData(mainArray);
