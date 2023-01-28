export interface PokemonsListStructure {
  count: number;
  next: string;
  previous: undefined;
  results: ResultsStructure[];
}

export interface ResultsStructure {
  name: string;
  url: string;
}
