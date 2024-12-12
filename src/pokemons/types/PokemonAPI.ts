export type StatKey =
  | "HP"
  | "attack"
  | "defense"
  | "special_attack"
  | "special_defense"
  | "speed";

type Stats = Record<StatKey, number>;

type ApiType = {
  name: string;
  image: string;
};

type ApiResistance = {
  name: string;
  damage_multiplier: number;
  damage_relation:
    | "neutral"
    | "resistant"
    | "vulnerable"
    | "twice_resistant"
    | "immune"
    | "twice_vulnerable";
};

type ApiEvolution = {
  name: string;
  pokedexId: number;
};

type ApiPreEvolution =
  | { name: string; pokedexIdd?: number; pokedexId?: number }
  | "none";

type ResistanceModifyingAbility = {
  name: string;
  slug: string;
};

export type PokemonAPI = {
  id: number;
  pokedexId: number;
  name: string;
  image: string;
  sprite: string;
  slug: string;
  stats: Stats;
  apiTypes: ApiType[];
  apiGeneration: number;
  apiResistances: ApiResistance[];
  resistanceModifyingAbilitiesForApi: ResistanceModifyingAbility[];
  apiEvolutions: ApiEvolution[];
  apiPreEvolution: ApiPreEvolution;
  apiResistancesWithAbilities: ApiResistance[];
};
