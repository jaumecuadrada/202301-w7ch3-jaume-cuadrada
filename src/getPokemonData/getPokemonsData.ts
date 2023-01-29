import type {
  PokemonListStructure,
  PokemonsDataStructure,
  PokemonsFirstStructure,
} from "../types";

const getPokemondsData = async (
  mainArray: PokemonsFirstStructure
): Promise<PokemonListStructure[]> => {
  const pokemonsData = [];
  for await (const poke of mainArray.results) {
    const responseUnit = await fetch(poke.url);
    const pokemonUnit = (await responseUnit.json()) as PokemonsDataStructure;

    const pokeObject: PokemonListStructure = {
      name: pokemonUnit.name,
      id: pokemonUnit.id,
      image: pokemonUnit.sprites.other.dream_world.front_default,
    };

    pokemonsData.push(pokeObject);
  }

  return pokemonsData;
};

export default getPokemondsData;
