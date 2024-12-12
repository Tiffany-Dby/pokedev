import { useEffect, useState } from "react";
import { PokemonAPI } from "@/pokemons/types/PokemonAPI";
import { getRequest } from "@/shared/tools/api";
import { APP_ROUTES } from "@/shared/constants/routes";

const useGetRandomTeam = () => {
  const [randomTeam, setRandomTeam] = useState<PokemonAPI[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [teamError, setTeamError] = useState<string | null>(null);

  const handleGetRandomTeam = async () => {
    setIsLoading(true);
    const { result, error } = await getRequest<PokemonAPI[]>(
      `${APP_ROUTES.API_URL_POKEMON}/random/team`
    );
    setIsLoading(false);

    if (error) {
      setTeamError(error);
      return;
    }

    setRandomTeam(result);
  };

  useEffect(() => {
    handleGetRandomTeam();
  }, []);

  return { randomTeam, isLoading, teamError };
};

export default useGetRandomTeam;
