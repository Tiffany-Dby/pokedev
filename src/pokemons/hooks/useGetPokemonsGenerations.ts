import { PokemonAPI } from "@/pokemons/types/PokemonAPI";
import { APP_ROUTES } from "@/shared/constants/routes";
import { getRequest } from "@/shared/tools/api";
import { useEffect, useState } from "react";

const useGetPokemonsGenerations = () => {
  const TOTAL_GENERATION = 8;
  const [generations, setGenerations] = useState<PokemonAPI[][] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [generationsError, setGenerationsError] = useState<string | null>(null);

  const handleGetAllGenerations = async () => {
    setIsLoading(true);

    try {
      const promises = Array.from({ length: TOTAL_GENERATION }).map((_, i) =>
        getRequest<PokemonAPI[]>(
          `${APP_ROUTES.API_URL_POKEMON}/pokemon/generation/${i + 1}`
        )
      );

      const responses = await Promise.all(promises);

      const successfulResults = responses
        .filter((response) => !response.error && response.result)
        .map((response) => response.result);

      setGenerations(successfulResults);
    } catch (err) {
      console.error(err);
      if (err instanceof Error) setGenerationsError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleGetAllGenerations();
  }, []);

  return { generations, isLoading, generationsError };
};

export default useGetPokemonsGenerations;
