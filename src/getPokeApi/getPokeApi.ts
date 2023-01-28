import type { PokemonsListStructure } from "../types.js";

const getPokeApi = async (url: string): Promise<PokemonsListStructure> => {
  const response = await fetch(url);
  const pokemon = (await response.json()) as PokemonsListStructure;
  return pokemon;
};

export default getPokeApi;
