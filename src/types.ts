export interface PokemonsFirstStructure {
  count: number;
  next: string;
  previous: undefined;
  results: ResultsStructure[];
}

export interface ResultsStructure {
  name: string;
  url: string;
}

export interface PokemonsDataStructure {
  name: string;
  id: number;
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
}

export interface PokemonListStructure {
  name: string;
  id: number;
  image: string;
}
