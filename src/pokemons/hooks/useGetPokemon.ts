import { APP_ROUTES } from "@/shared/constants/routes";
import { getRequest } from "@/shared/tools/api";
import { useEffect, useState } from "react";
import { PokemonAPI } from "../types/PokemonAPI";

const useGetPokemon = (param: string | undefined | null) => {
  const [pokemon, setPokemon] = useState<PokemonAPI | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [pokemonError, setPokemonError] = useState<string | null>(null);

  const handleGetPokemon = async () => {
    const { result, error } = await getRequest<PokemonAPI>(
      `${APP_ROUTES.API_URL_POKEMON}/pokemon/${param}`
    );

    setIsLoading(false);

    if (error) {
      setPokemonError(error);
      console.log(error);
      return;
    }

    setPokemon(result);
  };

  useEffect(() => {
    handleGetPokemon();
  }, [param]);

  return { pokemon, isLoading, pokemonError };
};

export default useGetPokemon;
