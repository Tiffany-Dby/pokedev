import useGetTypes from "@/pokemons/hooks/useGetTypes";
import { PokemonAPI } from "@/pokemons/types/PokemonAPI";
import { getRequest } from "@/shared/tools/api";
import BaseButton from "@/shared/ui/components/BaseButton/BaseButton";
import BaseSelect from "@/shared/ui/components/BaseSelect/BaseSelect";
import { randomItems } from "@/shared/utils/random";
import { SetStateAction, useState } from "react";
import PokemonOverview from "../PokemonOverview/PokemonOverview";
import { APP_ROUTES } from "@/shared/constants/routes";
import "./GamePokemonSelector.scss";

const GamePokemonSelector = ({
  onPokemonSelect,
}: {
  onPokemonSelect: (parameter: PokemonAPI) => void;
}) => {
  const { types, isLoading, typesError } = useGetTypes();
  const [value, setValue] = useState("");
  const [pokemons, setPokemons] = useState<PokemonAPI[] | null>(null);

  const handleSubmitType = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!value) return;

    const { result, error } = await getRequest<PokemonAPI[]>(
      `${APP_ROUTES.API_URL_POKEMON}/pokemon/type/${value}`
    );

    if (error) {
      console.log(error);
      return;
    }

    setPokemons(randomItems(result, 10));
  };

  return (
    <>
      {typesError && <p>{typesError}</p>}

      {isLoading && <p>Chargement en cours...</p>}

      {!!types?.length && (
        <article>
          <h3>Démarrer une partie</h3>
          <form onSubmit={handleSubmitType}>
            <BaseSelect
              options={types}
              label="Liste des types disponibles : "
              id="gameType"
              onChange={(value: SetStateAction<string>) => setValue(value)}
              value={value}
            />
            <BaseButton type="submit" btnValue="Générer un pull de Pokémon" />
          </form>
        </article>
      )}

      {!!pokemons?.length && (
        <article className="pokemon-pull">
          <h3>Deck aléatoire de 10 Pokémons de type : {value}</h3>
          <p>Cliquez pour choisir votre champion !</p>
          <div className="pokemon-pull__list">
            {pokemons?.map((pokemon) => (
              <PokemonOverview
                key={pokemon.id}
                pokemon={pokemon}
                onClick={() => onPokemonSelect(pokemon)}
              />
            ))}
          </div>
        </article>
      )}
    </>
  );
};

export default GamePokemonSelector;
