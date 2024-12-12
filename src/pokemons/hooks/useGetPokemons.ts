import { APP_ROUTES } from "@/shared/constants/routes";
import { getRequest } from "@/shared/tools/api";
import { useEffect, useState } from "react";
import { PokemonAPI } from "../types/PokemonAPI";

const useGetPokemonsByType = (type: string) => {
  const [pokemons, setPokemons] = useState<PokemonAPI[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [pokemonError, setPokemonError] = useState<string | null>(null);

  const handleGetPokemons = async () => {
    setIsLoading(true);
    const { result, error } = await getRequest<PokemonAPI[]>(
      `${APP_ROUTES.API_URL_POKEMON}/pokemon/type/${type}`
    );
    setIsLoading(false);

    if (error) {
      setPokemonError(error);
      console.log(error);
      return;
    }

    setPokemons(result);
  };

  useEffect(() => {
    handleGetPokemons();
  }, [type]);

  return { pokemons, isLoading, pokemonError };
};

export default useGetPokemonsByType;
