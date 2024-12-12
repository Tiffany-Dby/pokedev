import { useEffect, useState } from "react";
import useGetTypes from "./useGetTypes";
import { getRequest } from "@/shared/tools/api";
import { PokemonAPI } from "../types/PokemonAPI";
import { APP_ROUTES } from "@/shared/constants/routes";

type PokemonsTypes = {
  type: string;
  pokemons: PokemonAPI[];
};

const useGetPokemonsTypes = () => {
  const [pokemonsTypes, setPokemonsTypes] = useState<PokemonsTypes[] | null>(
    null
  );
  const [isPokemonsTypesLoading, setIsPokemonsTypesLoading] = useState(false);
  const [pokemonTypesError, setPokemonsTypesError] = useState<string | null>(
    null
  );

  const { types } = useGetTypes();

  const handleGetPokemonsByTypes = async () => {
    setPokemonsTypesError(null);
    setIsPokemonsTypesLoading(true);
    try {
      const promises =
        types?.map((type) =>
          getRequest<PokemonAPI[]>(
            `${APP_ROUTES.API_URL_POKEMON}/pokemon/type/${type.name}`
          )
        ) ?? [];

      const responses = Promise.all(promises);

      if (!!types?.length) {
        const successfulResults = (await responses)
          .filter((response) => !response.error && response.result)
          .map((response, index) => ({
            type: types[index].name,
            pokemons: response.result,
          }));
        setPokemonsTypes(successfulResults);
      } else {
        throw new Error("An error occured while retrieving pokemon types");
      }
    } catch (err) {
      console.error(err);
      if (err instanceof Error) setPokemonsTypesError(err.message);
    } finally {
      setIsPokemonsTypesLoading(false);
    }
  };

  useEffect(() => {
    if (!!types?.length) handleGetPokemonsByTypes();
  }, [types]);

  return { pokemonsTypes, isPokemonsTypesLoading, pokemonTypesError };
};

export default useGetPokemonsTypes;
