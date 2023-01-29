import type { PokemonsFirstStructure } from "../types.js";

const getPokeApi = async (url: string): Promise<PokemonsFirstStructure> => {
  const response = await fetch(url);
  const pokemon = (await response.json()) as PokemonsFirstStructure;
  return pokemon;
};

export default getPokeApi;
