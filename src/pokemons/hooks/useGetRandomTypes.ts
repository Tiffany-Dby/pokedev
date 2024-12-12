import { useEffect, useState } from "react";
import { PokemonTypeAPI } from "@/pokemons/types/PokemonTypeAPI";
import { getRequest } from "@/shared/tools/api";
import { APP_ROUTES } from "@/shared/constants/routes";
import { randomItems } from "@/shared/utils/random";

const useGetRantomTypes = () => {
  const [randomTypes, setRandomTypes] = useState<PokemonTypeAPI[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [typesError, setTypesError] = useState<string | null>(null);

  const handleGetRandomTypes = async () => {
    setIsLoading(true);
    const { result, error } = await getRequest<PokemonTypeAPI[]>(
      `${APP_ROUTES.API_URL_POKEMON}/types`
    );
    setIsLoading(false);

    if (error) {
      setTypesError(error);
      return;
    }

    const getRandomTypes = randomItems(result, 3);
    setRandomTypes(getRandomTypes);
  };

  useEffect(() => {
    handleGetRandomTypes();
  }, []);

  return { randomTypes, isLoading, typesError };
};

export default useGetRantomTypes;
