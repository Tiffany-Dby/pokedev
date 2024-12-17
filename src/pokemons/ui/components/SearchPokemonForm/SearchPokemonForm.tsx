import { APP_ROUTES } from "@/shared/constants/routes";
import BaseButton from "@/shared/ui/components/BaseButton/BaseButton";
import BaseInput from "@/shared/ui/components/BaseInput/BaseInput";
import { useNavigate } from "react-router";
import "./SearchPokemonForm.scss";
import { capitalize } from "@/shared/utils/string";
import useGetPokemons from "@/pokemons/hooks/useGetPokemons";
import { PokemonAPI } from "@/pokemons/types/PokemonAPI";
import { useEffect, useState } from "react";

const SearchPokemonForm = () => {
  const navigate = useNavigate();

  const { pokemons } = useGetPokemons();
  const [notFound, setNotFound] = useState<string | null>(null);

  const checkPokemonExist = (pokemon: PokemonAPI, query: string) =>
    pokemon.name === capitalize(query);

  const handleSubmitSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNotFound(null);

    const currentTarget = e.target as HTMLFormElement;
    const query = currentTarget.search?.value || "";

    if (!pokemons?.some((pokemon) => checkPokemonExist(pokemon, query))) {
      setNotFound("Ce Pokémon n'éxiste pas");
      return;
    }

    navigate(`${APP_ROUTES.SEARCH}?search=${capitalize(query)}`);
  };

  useEffect(() => {
    setNotFound(null);
  }, []);

  return (
    <div className="search-pokemon__wrapper">
      <form
        className="search-pokemon"
        method="GET"
        onSubmit={handleSubmitSearch}
      >
        <div className="search-pokemon__inputs">
          <BaseInput
            id="search"
            type="search"
            list="searchPokemonList"
            ariaLabel="Rechercher un Pokémon par son nom"
            placeholder="Rattata, Psykokwak,.. "
          />
          <datalist id="searchPokemonList">
            {pokemons?.map((pokemon) => (
              <option key={pokemon.id} value={pokemon.name} />
            ))}
          </datalist>
          <BaseButton type="submit" btnValue="Rechercher" />
        </div>
        {notFound && <p className="search-pokemon--error error">{notFound}</p>}
      </form>
    </div>
  );
};

export default SearchPokemonForm;
