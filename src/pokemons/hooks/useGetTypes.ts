import { useEffect, useState } from "react";
import { PokemonTypeAPI } from "@/pokemons/types/PokemonTypeAPI";
import { getRequest } from "@/shared/tools/api";
import { APP_ROUTES } from "@/shared/constants/routes";

const useGetTypes = () => {
  const [types, setTypes] = useState<PokemonTypeAPI[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [typesError, setTypesError] = useState<string | null>(null);

  const handleGetTypes = async () => {
    setIsLoading(true);
    const { result, error } = await getRequest<PokemonTypeAPI[]>(
      `${APP_ROUTES.API_URL_POKEMON}/types`
    );
    setIsLoading(false);

    if (error) {
      setTypesError(error);
      return;
    }

    setTypes(result);
  };

  useEffect(() => {
    handleGetTypes();
  }, []);

  return { types, isLoading, typesError };
};

export default useGetTypes;
